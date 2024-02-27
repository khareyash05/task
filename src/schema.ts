import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";

export const product = pgTable('product', {
  id: integer("id"),
  name: text("name"),
  description: text("description"),
  cost: text("cost"),
});