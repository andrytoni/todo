import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service.js';
import { CreateItemDto } from './dto/create-item.dto.js';
// import { UpdateItemDto } from './dto/update-item.dto.js';

@Controller('lists/:listId/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(
    @Param('listId', ParseIntPipe) listId: number,
    @Body() createItemDto: CreateItemDto,
  ) {
    console.log(createItemDto, listId);
    return await this.itemsService.create(createItemDto, listId);
  }

  @Get()
  async findAll(@Param('listId', ParseIntPipe) listId: number) {
    return await this.itemsService.findAll(listId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string /* @Body()  updateItemDto: UpdateItemDto*/) {
    return this.itemsService.update(+id /*updateItemDto*/);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
