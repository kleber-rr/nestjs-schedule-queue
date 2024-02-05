import { Test, TestingModule } from '@nestjs/testing';
import { TweetsRestApiService } from './tweets-rest-api.service';

describe('TweetsRestApiService', () => {
  let service: TweetsRestApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsRestApiService],
    }).compile();

    service = module.get<TweetsRestApiService>(TweetsRestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
