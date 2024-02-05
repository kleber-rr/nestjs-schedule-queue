import { Injectable } from '@nestjs/common';
import { CreateTweetsRestApiDto } from './dto/create-tweets-rest-api.dto';
import { UpdateTweetsRestApiDto } from './dto/update-tweets-rest-api.dto';
import { Tweets } from './entities/tweets';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TweetsRestApiService {

  constructor(
    @InjectModel(Tweets)
    private tweetsModel: typeof Tweets,
  ) {}

  create(createTweetsRestApiDto: CreateTweetsRestApiDto) {
    return  this.tweetsModel.create(createTweetsRestApiDto as any);
  }

  findAll() {
    return this.tweetsModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} tweetsRestApi`;
  }

  update(id: number, updateTweetsRestApiDto: UpdateTweetsRestApiDto) {
    return `This action updates a #${id} tweetsRestApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweetsRestApi`;
  }
}
