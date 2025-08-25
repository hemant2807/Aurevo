import { drizzle } from "drizzle-orm/neon-http";
import type { NeonHttpDatabase } from "drizzle-orm/neon-http";

// Explicit type for db
export const db: NeonHttpDatabase = drizzle(process.env.DATABASE_URL!);
