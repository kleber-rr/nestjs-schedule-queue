import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TweetsRestApiModule } from './tweets-rest-api/tweets-rest-api.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true
    }),
    TweetsRestApiModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService,],
})
export class AppModule {}
