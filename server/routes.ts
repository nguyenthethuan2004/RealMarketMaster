import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { loginSchema, registerSchema } from "@shared/schema";
import { randomBytes, pbkdf2Sync } from "crypto";
import session from "express-session";
import MemoryStore from "memorystore";

declare module "express-session" {
  interface SessionData {
    userId: number;
    isAuthenticated: boolean;
  }
}

// Create a hash from password
function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const generatedSalt = salt || randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, generatedSalt, 1000, 64, "sha512").toString("hex");
  return { hash, salt: generatedSalt };
}

// Verify password against stored hash
function verifyPassword(password: string, hash: string, salt: string): boolean {
  const hashVerify = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return hash === hashVerify;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize session middleware
  const SessionStore = MemoryStore(session);
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "gavani-secret-key",
      resave: false,
      saveUninitialized: false,
      store: new SessionStore({
        checkPeriod: 86400000, // prune expired entries every 24h
      }),
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        secure: process.env.NODE_ENV === "production",
      },
    })
  );

  // Auth middleware to check if user is authenticated
  const isAuthenticated = (req: Request, res: Response, next: any) => {
    if (req.session.isAuthenticated) {
      return next();
    }
    return res.status(401).json({ message: "Unauthorized" });
  };

  // API Routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = registerSchema.parse(req.body);
      
      // Check if email already exists
      const existingUserByEmail = await storage.getUserByEmail(validatedData.email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "Email đã được sử dụng" });
      }
      
      // Generate username if not provided
      const username = validatedData.username || validatedData.email.split("@")[0];
      
      // Check if username already exists
      const existingUserByUsername = await storage.getUserByUsername(username);
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Tên đăng nhập đã được sử dụng" });
      }
      
      // Hash password
      const { hash, salt } = hashPassword(validatedData.password);
      const passwordWithSalt = `${hash}:${salt}`;
      
      // Create user
      const user = await storage.createUser({
        email: validatedData.email,
        username: username,
        password: passwordWithSalt,
        name: validatedData.name,
        phone: validatedData.phone,
      });
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.status(201).json({
        message: "Đăng ký thành công",
        user: userWithoutPassword
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ message: "Dữ liệu không hợp lệ" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      // Find user by email
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user) {
        return res.status(401).json({ message: "Email hoặc mật khẩu không chính xác" });
      }
      
      // Verify password
      const [hash, salt] = user.password.split(":");
      const isValid = verifyPassword(validatedData.password, hash, salt);
      
      if (!isValid) {
        return res.status(401).json({ message: "Email hoặc mật khẩu không chính xác" });
      }
      
      // Set session
      req.session.userId = user.id;
      req.session.isAuthenticated = true;
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.json({
        message: "Đăng nhập thành công",
        user: userWithoutPassword
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(400).json({ message: "Dữ liệu không hợp lệ" });
    }
  });

  app.get("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Đã xảy ra lỗi khi đăng xuất" });
      }
      res.json({ message: "Đăng xuất thành công" });
    });
  });

  app.get("/api/auth/me", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const user = await storage.getUser(userId!);
      
      if (!user) {
        return res.status(404).json({ message: "Không tìm thấy người dùng" });
      }
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.json(userWithoutPassword);
    } catch (error) {
      console.error("Get user error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy thông tin người dùng" });
    }
  });

  app.put("/api/auth/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const userData = req.body;
      
      // Update user data
      const updatedUser = await storage.updateUser(userId!, userData);
      
      if (!updatedUser) {
        return res.status(404).json({ message: "Không tìm thấy người dùng" });
      }
      
      // Remove password from response
      const { password, ...userWithoutPassword } = updatedUser;
      
      res.json({
        message: "Cập nhật thông tin thành công",
        user: userWithoutPassword
      });
    } catch (error) {
      console.error("Update profile error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật thông tin người dùng" });
    }
  });

  // Product routes
  app.get("/api/products", async (req, res) => {
    try {
      const type = req.query.type as string | undefined;
      const products = await storage.getProducts(type);
      res.json(products);
    } catch (error) {
      console.error("Get products error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách sản phẩm" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      const product = await storage.getProduct(productId);
      
      if (!product) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
      }
      
      res.json(product);
    } catch (error) {
      console.error("Get product error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy thông tin sản phẩm" });
    }
  });

  // Campaigns routes (protected)
  app.get("/api/campaigns", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const campaigns = await storage.getCampaignsByUserId(userId!);
      res.json(campaigns);
    } catch (error) {
      console.error("Get campaigns error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách chiến dịch" });
    }
  });

  app.post("/api/campaigns", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const campaignData = {
        ...req.body,
        user_id: userId
      };
      
      const campaign = await storage.createCampaign(campaignData);
      res.status(201).json(campaign);
    } catch (error) {
      console.error("Create campaign error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi tạo chiến dịch" });
    }
  });

  app.get("/api/campaigns/:id", isAuthenticated, async (req, res) => {
    try {
      const campaignId = parseInt(req.params.id);
      const campaign = await storage.getCampaign(campaignId);
      
      if (!campaign) {
        return res.status(404).json({ message: "Không tìm thấy chiến dịch" });
      }
      
      // Check if campaign belongs to user
      if (campaign.user_id !== req.session.userId) {
        return res.status(403).json({ message: "Bạn không có quyền truy cập chiến dịch này" });
      }
      
      res.json(campaign);
    } catch (error) {
      console.error("Get campaign error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy thông tin chiến dịch" });
    }
  });

  app.put("/api/campaigns/:id", isAuthenticated, async (req, res) => {
    try {
      const campaignId = parseInt(req.params.id);
      const campaign = await storage.getCampaign(campaignId);
      
      if (!campaign) {
        return res.status(404).json({ message: "Không tìm thấy chiến dịch" });
      }
      
      // Check if campaign belongs to user
      if (campaign.user_id !== req.session.userId) {
        return res.status(403).json({ message: "Bạn không có quyền chỉnh sửa chiến dịch này" });
      }
      
      const updatedCampaign = await storage.updateCampaign(campaignId, req.body);
      res.json(updatedCampaign);
    } catch (error) {
      console.error("Update campaign error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật chiến dịch" });
    }
  });

  // Orders routes (protected)
  app.get("/api/orders", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const orders = await storage.getOrdersByUserId(userId!);
      
      // Get order items for each order
      const ordersWithItems = await Promise.all(
        orders.map(async (order) => {
          const items = await storage.getOrderItems(order.id);
          return {
            ...order,
            items
          };
        })
      );
      
      res.json(ordersWithItems);
    } catch (error) {
      console.error("Get orders error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách đơn hàng" });
    }
  });

  // API Keys routes (protected)
  app.get("/api/api-keys", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const apiKeys = await storage.getApiKeysByUserId(userId!);
      res.json(apiKeys);
    } catch (error) {
      console.error("Get API keys error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách API key" });
    }
  });

  app.post("/api/api-keys", isAuthenticated, async (req, res) => {
    try {
      const userId = req.session.userId;
      const { name } = req.body;
      
      // Generate API key
      const key = `gavani_api_${randomBytes(16).toString("hex")}`;
      
      // Set expiration date (1 year from now)
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);
      
      const apiKey = await storage.createApiKey({
        user_id: userId!,
        name,
        key,
        expires_at: expiresAt
      });
      
      res.status(201).json(apiKey);
    } catch (error) {
      console.error("Create API key error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi tạo API key" });
    }
  });

  app.delete("/api/api-keys/:id", isAuthenticated, async (req, res) => {
    try {
      const apiKeyId = parseInt(req.params.id);
      const apiKey = await storage.getApiKey(apiKeyId);
      
      if (!apiKey) {
        return res.status(404).json({ message: "Không tìm thấy API key" });
      }
      
      // Check if API key belongs to user
      if (apiKey.user_id !== req.session.userId) {
        return res.status(403).json({ message: "Bạn không có quyền xóa API key này" });
      }
      
      const success = await storage.revokeApiKey(apiKeyId);
      
      if (success) {
        res.json({ message: "API key đã được thu hồi thành công" });
      } else {
        res.status(500).json({ message: "Đã xảy ra lỗi khi thu hồi API key" });
      }
    } catch (error) {
      console.error("Revoke API key error:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi khi thu hồi API key" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
