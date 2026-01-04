import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto.js';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  @IsOptional()
  @IsBoolean()
  done: boolean;
}
