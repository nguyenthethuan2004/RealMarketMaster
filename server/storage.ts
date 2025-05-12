import { users, type User, type InsertUser, products, type Product, type InsertProduct, 
  orders, type Order, type InsertOrder, orderItems, type OrderItem, type InsertOrderItem,
  campaigns, type Campaign, type InsertCampaign, apiKeys, type ApiKey, type InsertApiKey } from "@shared/schema";
import { randomBytes } from "crypto";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, userData: Partial<User>): Promise<User | undefined>;
  
  // Product operations
  getProduct(id: number): Promise<Product | undefined>;
  getProducts(type?: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Order operations
  getOrder(id: number): Promise<Order | undefined>;
  getOrdersByUserId(userId: number): Promise<Order[]>;
  createOrder(order: InsertOrder): Promise<Order>;
  addOrderItem(orderItem: InsertOrderItem): Promise<OrderItem>;
  getOrderItems(orderId: number): Promise<OrderItem[]>;
  
  // Campaign operations
  getCampaign(id: number): Promise<Campaign | undefined>;
  getCampaignsByUserId(userId: number): Promise<Campaign[]>;
  createCampaign(campaign: InsertCampaign): Promise<Campaign>;
  updateCampaign(id: number, campaignData: Partial<Campaign>): Promise<Campaign | undefined>;
  
  // API Key operations
  getApiKey(id: number): Promise<ApiKey | undefined>;
  getApiKeysByUserId(userId: number): Promise<ApiKey[]>;
  createApiKey(apiKey: InsertApiKey): Promise<ApiKey>;
  revokeApiKey(id: number): Promise<boolean>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private orders: Map<number, Order>;
  private orderItems: Map<number, OrderItem>;
  private campaigns: Map<number, Campaign>;
  private apiKeys: Map<number, ApiKey>;
  
  private userIdCounter: number;
  private productIdCounter: number;
  private orderIdCounter: number;
  private orderItemIdCounter: number;
  private campaignIdCounter: number;
  private apiKeyIdCounter: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.orders = new Map();
    this.orderItems = new Map();
    this.campaigns = new Map();
    this.apiKeys = new Map();
    
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    this.orderIdCounter = 1;
    this.orderItemIdCounter = 1;
    this.campaignIdCounter = 1;
    this.apiKeyIdCounter = 1;
    
    // Initialize with some sample products
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Facebook Ads Pro",
        description: "Chiến dịch quảng cáo Facebook chuyên nghiệp cho bất động sản",
        price: 3500000,
        type: "online-marketing",
        period: "30 ngày",
        image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
      },
      {
        name: "Email Marketing Pro",
        description: "Gói 10,000 emails với mẫu thiết kế chuyên nghiệp",
        price: 2200000,
        type: "online-marketing",
        period: "10,000 emails",
        image_url: "https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
      },
      {
        name: "Google Ads Premium",
        description: "Quảng cáo Google tìm kiếm và hiển thị cho BĐS",
        price: 4500000,
        type: "online-marketing",
        period: "30 ngày",
        image_url: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
      },
      {
        name: "Landing Page Pro",
        description: "Trang đích chuyên nghiệp cho dự án bất động sản",
        price: 2800000,
        type: "design",
        period: "trang",
        image_url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
      },
      {
        name: "SEO Bất Động Sản",
        description: "Tối ưu hóa website BĐS của bạn trên công cụ tìm kiếm",
        price: 3200000,
        type: "online-marketing",
        period: "3 tháng",
        image_url: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
      },
      {
        name: "Quản lý MXH",
        description: "Quản lý và phát triển các kênh mạng xã hội BĐS",
        price: 2500000,
        type: "online-marketing",
        period: "tháng",
        image_url: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
      }
    ];

    // Add sample products
    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      user => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      user => user.username.toLowerCase() === username.toLowerCase()
    );
  }

  async createUser(userData: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const now = new Date();
    const user: User = {
      ...userData,
      id,
      created_at: now
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | undefined> {
    const user = await this.getUser(id);
    if (!user) return undefined;
    
    const updatedUser = {
      ...user,
      ...userData
    };
    
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Product methods
  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProducts(type?: string): Promise<Product[]> {
    const allProducts = Array.from(this.products.values());
    if (type) {
      return allProducts.filter(product => product.type === type);
    }
    return allProducts;
  }

  async createProduct(productData: InsertProduct): Promise<Product> {
    const id = this.productIdCounter++;
    const now = new Date();
    const product: Product = {
      ...productData,
      id,
      rating: 4, // Default rating for sample data
      reviews_count: Math.floor(Math.random() * 50) + 10, // Random reviews count for sample data
      created_at: now
    };
    this.products.set(id, product);
    return product;
  }

  // Order methods
  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(
      order => order.user_id === userId
    );
  }

  async createOrder(orderData: InsertOrder): Promise<Order> {
    const id = this.orderIdCounter++;
    const now = new Date();
    const order: Order = {
      ...orderData,
      id,
      created_at: now
    };
    this.orders.set(id, order);
    return order;
  }

  async addOrderItem(orderItemData: InsertOrderItem): Promise<OrderItem> {
    const id = this.orderItemIdCounter++;
    const orderItem: OrderItem = {
      ...orderItemData,
      id
    };
    this.orderItems.set(id, orderItem);
    return orderItem;
  }

  async getOrderItems(orderId: number): Promise<OrderItem[]> {
    return Array.from(this.orderItems.values()).filter(
      item => item.order_id === orderId
    );
  }

  // Campaign methods
  async getCampaign(id: number): Promise<Campaign | undefined> {
    return this.campaigns.get(id);
  }

  async getCampaignsByUserId(userId: number): Promise<Campaign[]> {
    return Array.from(this.campaigns.values()).filter(
      campaign => campaign.user_id === userId
    );
  }

  async createCampaign(campaignData: InsertCampaign): Promise<Campaign> {
    const id = this.campaignIdCounter++;
    const now = new Date();
    const campaign: Campaign = {
      ...campaignData,
      id,
      leads_count: 0,
      progress: 0,
      created_at: now
    };
    this.campaigns.set(id, campaign);
    return campaign;
  }

  async updateCampaign(id: number, campaignData: Partial<Campaign>): Promise<Campaign | undefined> {
    const campaign = await this.getCampaign(id);
    if (!campaign) return undefined;
    
    const updatedCampaign = {
      ...campaign,
      ...campaignData
    };
    
    this.campaigns.set(id, updatedCampaign);
    return updatedCampaign;
  }

  // API Key methods
  async getApiKey(id: number): Promise<ApiKey | undefined> {
    return this.apiKeys.get(id);
  }

  async getApiKeysByUserId(userId: number): Promise<ApiKey[]> {
    return Array.from(this.apiKeys.values()).filter(
      apiKey => apiKey.user_id === userId
    );
  }

  async createApiKey(apiKeyData: InsertApiKey): Promise<ApiKey> {
    const id = this.apiKeyIdCounter++;
    const apiKey: ApiKey = {
      ...apiKeyData,
      id,
      created_at: new Date()
    };
    this.apiKeys.set(id, apiKey);
    return apiKey;
  }

  async revokeApiKey(id: number): Promise<boolean> {
    return this.apiKeys.delete(id);
  }
}

// Export singleton instance
export const storage = new MemStorage();
