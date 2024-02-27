import { Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "src/db/conn";
import { product } from "src/schema";
// import { v4 as uuidv4 } from 'uuid';

const id = Math.random()

@Injectable()
export class ProductsService{
    async insertProduct(name:string,description:string,cost:string){
        const newProduct  = await db.insert(product).values([
            {
                id,name,description,cost
            }
        ])
        return newProduct
    }
    async getProduct(id:number){
        const existingProduct  = await db.select().from(product)
        return existingProduct
    }

    async putProduct(id:number,name?:string,description?:string,cost?:string){
        const updateProduct = await db.update(product).set({name,description,cost}).where(eq(product.id,id));
        return updateProduct
    }   
    
    async deleteProduct(id:number){
        const deletedProduct  = await db.delete(product).where(eq(product.id,id))
        return deletedProduct
    }
}