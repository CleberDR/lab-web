import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
declare const module: any;

config();
const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);

  const config = new DocumentBuilder()
  .setBasePath('')
  .setTitle('LabWeb API')
  .setDescription('LabWeb Class API')
  .setVersion('1.0')
  .addTag('')
  .build();
  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  console.log(`API Online. Access http://localhost:${PORT}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
