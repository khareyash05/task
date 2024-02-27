import { drizzle } from 'drizzle-orm/postgres-js'
import * as postgres from 'postgres'
// import { product } from '../schema'

const connectionString = 'postgres://postgres.olgcpzzcpqyxezbuibba:Yashkhare@05@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client);

// const allProducts = db.select().from(product);