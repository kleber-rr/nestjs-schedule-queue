import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweetsRestApiService } from './tweets-rest-api.service';
import { CreateTweetsRestApiDto } from './dto/create-tweets-rest-api.dto';
import { UpdateTweetsRestApiDto } from './dto/update-tweets-rest-api.dto';

@Controller('tweets-rest-api')
export class TweetsRestApiController {
  constructor(private readonly tweetsRestApiService: TweetsRestApiService) {}

  @Post()
  create(@Body() createTweetsRestApiDto: CreateTweetsRestApiDto) {
    return this.tweetsRestApiService.create(createTweetsRestApiDto);
  }

  @Get()
  findAll() {
    return this.tweetsRestApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsRestApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetsRestApiDto: UpdateTweetsRestApiDto) {
    return this.tweetsRestApiService.update(+id, updateTweetsRestApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsRestApiService.remove(+id);
  }
}
