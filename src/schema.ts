import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const product = pgTable("product", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  cost: text("cost"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});