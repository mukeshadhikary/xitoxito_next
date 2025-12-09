import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// Features table
export const features = sqliteTable("features", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  icon: text("icon").notNull(),
  title: text("title").notNull(),
  titleNp: text("title_np").notNull(),
  description: text("description").notNull(),
  order: integer("order").default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Testimonials table
export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  business: text("business").notNull(),
  businessNp: text("business_np").notNull(),
  text: text("text").notNull(),
  textNp: text("text_np").notNull(),
  rating: integer("rating").notNull().default(5),
  avatarUrl: text("avatar_url"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Pricing plans table
export const pricingPlans = sqliteTable("pricing_plans", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  nameNp: text("name_np").notNull(),
  price: text("price").notNull(),
  priceNpr: text("price_npr").notNull(),
  popular: integer("popular", { mode: "boolean" }).default(false),
  order: integer("order").default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Pricing features table
export const pricingFeatures = sqliteTable("pricing_features", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  planId: integer("plan_id").references(() => pricingPlans.id),
  feature: text("feature").notNull(),
  featureNp: text("feature_np").notNull(),
  order: integer("order").default(0),
});

// Contact submissions table
export const contactSubmissions = sqliteTable("contact_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  business: text("business"),
  message: text("message").notNull(),
  preferredContact: text("preferred_contact").default("email"),
  status: text("status").default("pending"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Newsletter subscriptions
export const newsletter = sqliteTable("newsletter", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  subscribedAt: integer("subscribed_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Site analytics
export const analytics = sqliteTable("analytics", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  page: text("page").notNull(),
  event: text("event").notNull(),
  metadata: text("metadata"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Site settings
export const siteSettings = sqliteTable("site_settings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Type exports
export type Feature = typeof features.$inferSelect;
export type NewFeature = typeof features.$inferInsert;
export type Testimonial = typeof testimonials.$inferSelect;
export type NewTestimonial = typeof testimonials.$inferInsert;
export type PricingPlan = typeof pricingPlans.$inferSelect;
export type NewPricingPlan = typeof pricingPlans.$inferInsert;
export type PricingFeature = typeof pricingFeatures.$inferSelect;
export type NewPricingFeature = typeof pricingFeatures.$inferInsert;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;
export type Newsletter = typeof newsletter.$inferSelect;
export type NewNewsletter = typeof newsletter.$inferInsert;
export type Analytics = typeof analytics.$inferSelect;
export type NewAnalytics = typeof analytics.$inferInsert;
export type SiteSetting = typeof siteSettings.$inferSelect;
export type NewSiteSetting = typeof siteSettings.$inferInsert;
