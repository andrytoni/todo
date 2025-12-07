import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ItemsService } from '../app.service';
import { CreateListItemDto } from '../dto/create-list-item.dto';
import { Item } from '../interfaces/list-item.intertaface';

@Controller('item')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAllListItems(): Item[] {
    return this.itemsService.findAllListItems();
  }

  @Post()
  createListItem(@Body() CreateListItemDto: CreateListItemDto) {
    this.itemsService.createListItem(CreateListItemDto);
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
