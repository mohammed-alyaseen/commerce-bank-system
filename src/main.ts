import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
 
  const config = new DocumentBuilder()
  .setTitle("title")
  .setDescription("description")
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, document);


//this fumction for validat
app.useGlobalPipes(
new  ValidationPipe({
  //when whitelist is true ,we can receive any data and reject data that it doesn't have a pirmission without error
  //whitelist:true


  //it's opposite whitelist
  //forbidNonWhitelisted:true

  
  // transform data to real type from APIs 
    transform: true,
  }),
),

 
 
  await app.listen(3000);
}
bootstrap();
