import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  id: number;
}
