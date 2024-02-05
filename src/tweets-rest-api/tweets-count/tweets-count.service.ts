import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tweets } from '../entities/tweets';
import { Interval } from '@nestjs/schedule';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';


@Injectable()
export class TweetsCountService {
    private limit = 10;
    constructor(
        @InjectModel(Tweets)
        private tweetsModel: typeof Tweets,
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache,
      ) {}
    
    @Interval(5000)
    async countTweets() {
        console.log('Finding tweets...');
        let offset = await this.cacheManager.get<number>('tweet-offset')??0;
        console.log('Offset:', offset);
        console.log('limit:', this.limit);
        const tweets = await this.tweetsModel.findAll({ 
            offset,
            limit: this.limit,
        });
        console.log(`${tweets.length} tweets found.`);

        if(tweets.length === this.limit){
            offset += this.limit;
            console.log(`offset update to ${offset}`);
            await this.cacheManager.set('tweet-offset', offset, 0);
        }
    }
}
