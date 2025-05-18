import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";

// Get the database URL from environment variables
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

// Create a SQL connection
const sql = neon(databaseUrl);

// Create a Drizzle instance
export const db = drizzle(sql);