import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateListDto } from './dtos/create-list.dto';

@Controller('lists')
export class ListsController {
  @Post()
  createList(@Body() createListDto: CreateListDto) {
    return;
  }
}
