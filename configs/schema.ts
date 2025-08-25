import { boolean, pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  email: varchar().notNull(),
  isMember: boolean().default(false),
});

export type User = typeof USER_TABLE.$inferSelect;   // For SELECT queries
export type NewUser = typeof USER_TABLE.$inferInsert; // For INSERT queries
