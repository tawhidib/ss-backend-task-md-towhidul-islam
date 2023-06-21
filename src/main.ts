import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();

  // add global validation with options
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      skipUndefinedProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true,
      dismissDefaultMessages: true,
    }),
  );

  // setting global prefix... ... ...
  app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
  await app.listen(configService.get('PORT') || 4000);
}
bootstrap();
