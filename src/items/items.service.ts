import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/list-item.intertaface';
import { ItemDto } from './dto/item.dto';

@Injectable()
export class ItemsService {
  private readonly itemList: Item[] = [];

  createListItem(listItemDto: ItemDto) {
    this.itemList.push(listItemDto);
  }

  findAllListItems(): Item[] {
    return this.itemList;
  }

  deleteListItem(listItemDto: ItemDto): boolean {
    const index = this.itemList.findIndex((i) => listItemDto.id === i.id);
    if (!index) return false;
    this.itemList.splice(index, 1);
    return true;
  }
}
