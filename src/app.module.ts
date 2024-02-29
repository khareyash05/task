import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstant';

@Module({
  imports: [
    ProductsModule,
    JwtModule.register({
      global:true,
      secret: jwtConstants.secret,
      signOptions : {expiresIn:'60s'}
    })
  ],
  controllers: [AppController],
  providers: [AppService,JwtService],
})
export class AppModule {}
