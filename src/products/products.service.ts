import { Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "src/db/conn";
import { product } from "src/schema";
import { v4 as uuidv4 } from 'uuid';

const id:string  = uuidv4()

@Injectable()
export class ProductsService{
    async insertProduct(
        name:string,
        description:string,
        cost:number
    ){
        await db.insert(product).values([
            {
                id,name,description,cost
            }
        ])
        return this.getProductByID(id)
    }

    async getAllProducts(){
        const products = await db.select().from(product);
        return products
    }
    async getProductByID(id:string){
        const existingProduct  = await db.select().from(product).where(eq(product.id,id));
        return existingProduct
    }

    async updateProduct(
        id:string,
        name?:string,
        description?:string,
        cost?:number
    ){
        await db.update(product).set({name,description,cost}).where(eq(product.id,id));
        return this.getProductByID(id)
    }   
    
    async deleteProduct(id:string){
        await db.delete(product).where(eq(product.id,id))
        return `Deleted product with id ${id}`
    }
}