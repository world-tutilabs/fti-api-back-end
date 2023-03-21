import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('FTI API')
    .setDescription('Made by @Tutilabs')
    .setVersion('1.0')
    .addTag('FTI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme('v3');
  const options = {
    explorer: true,
    customCss: theme.getBuffer('dark'),
    customSiteTitle: 'FTI API Documentation',
    customfavIcon: './assets/tutilabs.ico',
  };

  SwaggerModule.setup('api', app, document, options);

  await app.listen(process.env.PORT);
  Logger.verbose(`🚀 Listening on PORT ${process.env.PORT}`);
  Logger.verbose(
    `📄 Take a look at the docs http://localhost:${process.env.PORT}/api`,
  );
}
bootstrap();
