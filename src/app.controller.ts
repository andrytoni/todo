import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { Item } from './interfaces/list-item.intertaface';

@Controller('item')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  findAllListItems(): Item[] {
    return this.appService.findAllListItems();
  }

  @Post()
  createListItem(@Body() CreateListItemDto: CreateListItemDto) {
    this.appService.createListItem(CreateListItemDto);
  }

  @Put(':id')
  updateListItem(@Param('id') id: string): string {
    return `Altera item ${id} de lista`;
  }

  @Delete()
  deleteListItem(): string {
    return 'Deleta item da lista';
  }
}
