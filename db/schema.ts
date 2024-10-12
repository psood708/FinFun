import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts",{
    id:text("id").primaryKey(),
    plaidId:text("plaid_id"),
    name:text("name").notNull(),
    usreId:text("user_id").notNull(),
});