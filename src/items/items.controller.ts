import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dtos/create-item.dto';
import { Item } from './interfaces/item.interface';

@Controller('item')
export class ItemsController {
  constructor(private appService: ItemsService) {}

  @Get()
  findAllListItems(): Item[] {
    return this.appService.findAllListItems();
  }

  @Post()
  createListItem(@Body() CreateListItemDto: CreateItemDto) {
    this.appService.createListItem(CreateListItemDto);
  }

  @Delete(':id')
  deleteListItem(): string {
    return 'Deleta item da lista';
  }
}
