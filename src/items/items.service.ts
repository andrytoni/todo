import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dtos/create-item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';

@Injectable()
export class ListService {
  private readonly itemList: Item[] = [];

  findAllListItems(): Item[] {
    return this.itemList;
  }

  findOneListItem(id: number): Item | undefined {
    const item = this.itemList.find((i) => i.id === id);
    return item;
  }

  createListItem(createItemDto: CreateItemDto) {
    this.itemList.push(createItemDto);
  }

  updateListItem(id: number, updateItemDto: UpdateItemDto) {
    const index = this.itemList.findIndex((i) => i.id === id);
    const item = this.itemList[index];
    this.itemList[index] = { ...item, ...updateItemDto };

    return this.itemList[index];
  }

  deleteListItem(): boolean {
    // const index = this.itemList.findIndex((i) => listItemDto.id === i.id);
    // if (!index) return false;
    // this.itemList.splice(index, 1);
    return true;
  }
}
