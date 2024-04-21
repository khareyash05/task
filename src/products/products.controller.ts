import { Body, Controller, Header, Post,Get, Delete, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService){}

    @Post()
    @Header('Content-Type','application/json')
    addProduct(
        @Body('name') productTitle:string,
        @Body('description') productDesc:string,
        @Body('cost') productCost :number
    ) : any{
        return this.productService.insertProduct(productTitle,productDesc,productCost)
    }

    @Get()
    @Header('Content-Type','application/json')
    getAllProducts(){
        return this.productService.getAllProducts()
    }

    @Get(':id')
    @Header('Content-Type','application/json')
    getProduct(@Param('id') id:string){
        return this.productService.getProductByID(id)
    }

    @Patch(':id')
    @Header('Content-Type','application/json')
    putProduct(
        @Param('id') id:string,
        @Body('name') productTitle:string,
        @Body('description') productDesc:string,
        @Body('cost') productCost :number
    ){
        return this.productService.updateProduct(id,productTitle,productDesc,productCost)
    }

    @Delete(':id')
    @Header('Content-Type','applications/json')
    deleteProduct(@Param('id') id:string){
        return this.productService.deleteProduct(id)
    }
}