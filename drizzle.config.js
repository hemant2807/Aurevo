import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:"postgresql://neondb_owner:npg_LIjFTz3KZau5@ep-noisy-pine-aecp0dgg-pooler.c-2.us-east-2.aws.neon.tech/aurevo?sslmode=require&channel_binding=require"
  }
});
