import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')   //Them tien to api, goi tien to nay thi se the hien day la 1 api 
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, 
    transform : true 
  }))
  app.enableCors() 
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
