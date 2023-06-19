import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();

  // setting global prefix... ... ...
  app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
  await app.listen(configService.get('PORT') || 4000);
}
bootstrap();
