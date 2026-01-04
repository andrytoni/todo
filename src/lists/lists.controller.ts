import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateListDto } from './dtos/create-list.dto.js';
import { ListsService } from './lists.service.js';

@Controller('lists')
export class ListsController {
  constructor(private listsService: ListsService) {}

  @Post()
  async createList(@Body() createListDto: CreateListDto) {
    return await this.listsService.createList(createListDto);
  }

  @Get()
  async getAllLists() {
    return await this.listsService.findAllLists();
  }
}
