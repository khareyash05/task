import { Test } from "@nestjs/testing";

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

describe('Products Controller',()=>{
    let productsController : ProductsController
    // let productsService: ProductsService

    beforeEach(async()=>{
        const moduleRef = await Test.createTestingModule({
            controllers:[ProductsController],
            providers:[ProductsService]
        }).compile()

        productsController = moduleRef.get<ProductsController>(ProductsController)
    });

        it('should be defined',async()=>{
            expect(await productsController.getAllProducts()).toBeDefined()
            // expect(await productsCo)
        })
})