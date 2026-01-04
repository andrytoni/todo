import { Injectable } from '@nestjs/common';
import { prisma } from './prisma.js';
import { CreateListDto } from 'src/lists/dtos/create-list.dto.js';
import { CreateItemDto } from 'src/items/dto/create-item.dto.js';
import { Item } from 'generated/prisma/client.js';
// import { List } from 'src/lists/list.interface';

@Injectable()
export class PrismaService {
  async create(createListDto: CreateListDto) {
    return await prisma.list.create({
      data: { ...createListDto, createdAt: new Date(), updatedAt: new Date() },
    });
  }

  async createItem(
    createItemDto: CreateItemDto,
    listId: number,
  ): Promise<Item> {
    return await prisma.item.create({
      data: {
        ...createItemDto,
        createdAt: new Date(),
        updatedAt: new Date(),
        listId: listId,
      },
    });
  }

  async findAllLists() {
    return await prisma.list.findMany();
  }

  async findAllItems(listId: number): Promise<Item[]> {
    return await prisma.item.findMany({ where: { listId: listId } });
  }
}
