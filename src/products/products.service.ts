import { Inject, Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "../db/conn";
import { product } from "../schema";
import { v4 as uuidv4 } from 'uuid';
import * as schema from "../schema"
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

@Injectable()
export class ProductsService{
    constructor(
        @Inject('DB_DEV') private drizzleDB : PostgresJsDatabase<typeof schema>
    ){}
    async insertProduct(
        name:string,
        description:string,
        cost:number
    ){
        const id:string  = uuidv4()
        const res = await this.drizzleDB.insert(product).values(
            {
                id,name,description,cost
            }
        ).returning()
        return res;
    }

    async getAllProducts(){
        const products = await this.drizzleDB.query.product.findMany()
        return products
    }
    async getProductByID(id:string){
        const existingProduct  = await this.drizzleDB.query.product.findFirst({
            where: eq(product.id,id)
        })
        return existingProduct
    }

    async updateProduct(
        id:string,
        name?:string,
        description?:string,
        cost?:number
    ){
        const res = await this.drizzleDB.update(product).set({name,description,cost}).where(eq(product.id,id)).returning();
        return res
    }   
    
    async deleteProduct(id:string){
        await this.drizzleDB.delete(product).where(eq(product.id,id))
        return `Deleted product with id ${id}`
    }
}