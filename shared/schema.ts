import { pgTable, text, serial, integer, boolean, timestamp, json, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  phone: text("phone"),
  company: text("company"),
  position: text("position"),
  specialty: text("specialty"),
  address: text("address"),
  district: text("district"),
  city: text("city"),
  zipcode: text("zipcode"),
  created_at: timestamp("created_at").defaultNow(),
});

// Products table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  type: text("type").notNull(), // online-marketing, advertising, design, analytics, packages
  period: text("period").notNull(), // 30 days, month, etc.
  image_url: text("image_url"),
  rating: integer("rating").default(0),
  reviews_count: integer("reviews_count").default(0),
  created_at: timestamp("created_at").defaultNow(),
});

// Orders table
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => users.id),
  order_number: text("order_number").notNull(),
  status: text("status").notNull(), // pending, completed, cancelled
  total_amount: integer("total_amount").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

// Order items table
export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  order_id: integer("order_id").notNull().references(() => orders.id),
  product_id: integer("product_id").notNull().references(() => products.id),
  quantity: integer("quantity").notNull(),
  price: integer("price").notNull(),
});

// Campaigns table
export const campaigns = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  type: text("type").notNull(), // email, facebook, google
  status: text("status").notNull(), // draft, active, completed, paused
  start_date: timestamp("start_date"),
  end_date: timestamp("end_date"),
  leads_count: integer("leads_count").default(0),
  progress: integer("progress").default(0), // percentage 0-100
  created_at: timestamp("created_at").defaultNow(),
});

// API Keys table
export const apiKeys = pgTable("api_keys", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  key: text("key").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  expires_at: timestamp("expires_at"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  name: true,
  phone: true,
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  price: true,
  type: true,
  period: true,
  image_url: true,
});

export const insertOrderSchema = createInsertSchema(orders).pick({
  user_id: true,
  order_number: true,
  status: true,
  total_amount: true,
});

export const insertOrderItemSchema = createInsertSchema(orderItems).pick({
  order_id: true,
  product_id: true,
  quantity: true,
  price: true,
});

export const insertCampaignSchema = createInsertSchema(campaigns).pick({
  user_id: true,
  name: true,
  type: true,
  status: true,
  start_date: true,
  end_date: true,
});

export const insertApiKeySchema = createInsertSchema(apiKeys).pick({
  user_id: true,
  name: true,
  key: true,
  expires_at: true,
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu cần ít nhất 6 ký tự" }),
});

// Registration schema
export const registerSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu cần ít nhất 6 ký tự" }),
  username: z.string().min(3, { message: "Tên đăng nhập cần ít nhất 3 ký tự" }).optional(),
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type LoginCredentials = z.infer<typeof loginSchema>;
export type RegisterCredentials = z.infer<typeof registerSchema>;

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type Order = typeof orders.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;

export type OrderItem = typeof orderItems.$inferSelect;
export type InsertOrderItem = z.infer<typeof insertOrderItemSchema>;

export type Campaign = typeof campaigns.$inferSelect;
export type InsertCampaign = z.infer<typeof insertCampaignSchema>;

export type ApiKey = typeof apiKeys.$inferSelect;
export type InsertApiKey = z.infer<typeof insertApiKeySchema>;
