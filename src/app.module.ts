import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstant';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
// import schema
import * as schema from "./schema"

require('dotenv').config()

@Module({
  imports: [
    ProductsModule,
    DrizzlePostgresModule.register({
      tag: 'DB_DEV',
      postgres: {
        url: process.env.DATABASE_URL,
      },
      config: { schema: { ...schema } },
    })
  ],
  controllers: [AppController],
  providers: [AppService,JwtService],
})
export class AppModule {}
