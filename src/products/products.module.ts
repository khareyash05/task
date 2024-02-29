import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductsMiddleware } from "./products.middleware";

@Module({
    controllers:[ProductsController],
    providers:[ProductsService]
})

export class ProductsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(ProductsMiddleware)
            .forRoutes('products')
    }
}