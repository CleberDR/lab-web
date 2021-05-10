import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { UserModule } from './user/user.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
declare const module: any;

config();
const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);

  const config = new DocumentBuilder()
  .setTitle('LabWeb API')
  .setDescription('LabWeb Class API')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  console.log(`API Online. Access http://localhost:${PORT}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
