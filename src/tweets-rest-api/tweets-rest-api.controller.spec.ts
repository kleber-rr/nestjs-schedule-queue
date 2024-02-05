import { Test, TestingModule } from '@nestjs/testing';
import { TweetsRestApiController } from './tweets-rest-api.controller';
import { TweetsRestApiService } from './tweets-rest-api.service';

describe('TweetsRestApiController', () => {
  let controller: TweetsRestApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweetsRestApiController],
      providers: [TweetsRestApiService],
    }).compile();

    controller = module.get<TweetsRestApiController>(TweetsRestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
