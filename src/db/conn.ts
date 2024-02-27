import { drizzle } from 'drizzle-orm/postgres-js'
import * as postgres from 'postgres'

// Though public now, I should put it as environment variable using dotenv
const connectionString = 'postgres://postgres.olgcpzzcpqyxezbuibba:Yashkhare@05@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'

const client = postgres(connectionString)
export const db = drizzle(client);