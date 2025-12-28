import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dtos/create-item.dto';

@Injectable()
export class ItemsService {
  private readonly itemList: Item[] = [];

  createListItem(createItemDto: CreateItemDto) {
    this.itemList.push(createItemDto);
  }

  findAllListItems(): Item[] {
    return this.itemList;
  }

  deleteListItem(): boolean {
    // const index = this.itemList.findIndex((i) => listItemDto.id === i.id);
    // if (!index) return false;
    // this.itemList.splice(index, 1);
    return true;
  }
}
