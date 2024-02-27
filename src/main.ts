import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


require("./db/conn")

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
