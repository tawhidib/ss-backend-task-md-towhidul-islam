import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, MediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
