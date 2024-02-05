import { PartialType } from '@nestjs/mapped-types';
import { CreateTweetsRestApiDto } from './create-tweets-rest-api.dto';

export class UpdateTweetsRestApiDto extends PartialType(CreateTweetsRestApiDto) {}
