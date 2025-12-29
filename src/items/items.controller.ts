import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { ListService } from './items.service';
import { CreateItemDto } from './dtos/create-item.dto';
import { Item } from './interfaces/item.interface';

@Controller('list')
export class ListController {
  constructor(private appService: ListService) {}

  @Get(':listId')
  findOneList(@Param(':listId') listId: string): string {
    return 'lista';
  }

  @Get(':listId/item/')
  findAllListItems(): Item[] {
    return this.appService.findAllListItems();
  }

  @Post()
  createList(): string {
    return 'cria lista';
  }

  @Post(':listId/item/')
  createListItem(
    @Body() CreateListItemDto: CreateItemDto,
    @Param(':listId') listId: string,
  ) {
    this.appService.createListItem(CreateListItemDto);
  }

  @Patch(':listId/item/:id')
  updateListItem(
    @Param(':listId') listId: string,
    @Param('id') id: string,
    @Body() CreateListItemDto: CreateItemDto,
  ) {
    this.appService.createListItem(CreateListItemDto);
  }

  @Delete(':listId')
  deleteList(@Param(':listId') listId: string): string {
    return 'excluiu lista ne';
  }

  @Delete(':listId/item/:id')
  deleteListItem(
    @Param(':listId') listId: string,
    @Param('id') id: string,
  ): string {
    return 'Deleta item da lista';
  }
}
