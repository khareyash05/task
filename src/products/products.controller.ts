import { Body, Controller, Header, Post,Get, Delete, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService){}

    @Post()
    @Header('Content-Type','applications/json')
    addProduct(
        @Body('name') productTitle:string,
        @Body('description') productDesc:string,
        @Body('cost') productCost :string
    ) : any{
        return this.productService.insertProduct(productTitle,productDesc,productCost)
    }

    @Get()
    @Header('Content-Type','applications/json')
    getAllProducts(){
        return this.productService.getAllProducts()
    }

    @Get(':id')
    @Header('Content-Type','applications/json')
    getProduct(@Param('id') id:number){
        return this.productService.getProduct(id)
    }

    @Patch(':id')
    @Header('Content-Type','applications/json')
    putProduct(
        @Param('id') id:number,
        @Body('name') productTitle:string,
        @Body('description') productDesc:string,
        @Body('cost') productCost :string
    ){
        return this.productService.putProduct(id,productTitle,productDesc,productCost)
    }

    @Delete(':id')
    @Header('Content-Type','applications/json')
    deleteProduct(@Param('id') id:number){
        return this.productService.deleteProduct(id)
    }
}