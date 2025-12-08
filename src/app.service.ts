import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/list-item.intertaface';
import { CreateListItemDto } from './dto/create-list-item.dto';

@Injectable()
export class AppService {
  private readonly itemList: Item[] = [];

  createListItem(listItemDto: CreateListItemDto) {
    const length = this.itemList.length;
    this.itemList.push({ ...listItemDto, id: length + 1 });
  }

  findAllListItems(): Item[] {
    return this.itemList;
  }
}
