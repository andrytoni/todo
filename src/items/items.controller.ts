import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemDto } from './dto/item.dto';
import { Item } from './interfaces/list-item.intertaface';

@Controller('item')
export class ItemsController {
  constructor(private appService: ItemsService) {}

  @Get()
  findAllListItems(): Item[] {
    return this.appService.findAllListItems();
  }

  @Post()
  createListItem(@Body() CreateListItemDto: ItemDto) {
    this.appService.createListItem(CreateListItemDto);
  }

  @Delete(':id')
  deleteListItem(): string {
    return 'Deleta item da lista';
  }
}
