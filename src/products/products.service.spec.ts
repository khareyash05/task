import { Test } from "@nestjs/testing";

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

describe('Products Controller',()=>{
    // let productsController : ProductsController
    let productsService: ProductsService

    beforeEach(async()=>{
        const moduleRef = await Test.createTestingModule({
            controllers:[ProductsController],
            providers:[ProductsService]
        }).compile()

        productsService = moduleRef.get<ProductsService>(ProductsService)
    });

        it('should be defined',async()=>{
            expect(await productsService.getAllProducts()).toBeDefined()
            expect(await productsService.getProduct("kjkjfgbkf")).toBeDefined()
            expect(await productsService.deleteProduct("kjkjfgbkf")).toBeDefined()
        })
})