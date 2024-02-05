import { Module} from '@nestjs/common';
import { TweetsRestApiService } from './tweets-rest-api.service';
import { TweetsRestApiController } from './tweets-rest-api.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tweets } from './entities/tweets';
import { TweetsCountService } from './tweets-count/tweets-count.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register(),
    SequelizeModule.forFeature([Tweets]),
  ],
  controllers: [TweetsRestApiController],
  providers: [TweetsRestApiService, TweetsCountService],
})
export class TweetsRestApiModule {}
