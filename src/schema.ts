import { serial, text, timestamp, pgTable, integer, uuid } from "drizzle-orm/pg-core";

export const product = pgTable('product', {
  id: uuid('id').primaryKey(),
  name: text("name"),
  description: text("description"),
  cost: integer("cost"),
});

export const user = pgTable('user',{
  id: uuid('id').primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
})