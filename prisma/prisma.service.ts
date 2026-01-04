import { Injectable } from '@nestjs/common';
import { prisma } from './prisma.js';
import { CreateListDto } from 'src/lists/dtos/create-list.dto.js';
import { CreateItemDto } from 'src/items/dto/create-item.dto.js';
import { Item } from 'generated/prisma/client.js';
import { UpdateItemDto } from 'src/items/dto/update-item.dto.js';
// import { List } from 'src/lists/list.interface';

@Injectable()
export class PrismaService {
  async create(createListDto: CreateListDto) {
    return await prisma.list.create({
      data: { ...createListDto, createdAt: new Date(), updatedAt: new Date() },
    });
  }

  async findAllLists() {
    return await prisma.list.findMany();
  }

  //Items
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

  async findAllItems(listId: number): Promise<Item[]> {
    return await prisma.item.findMany({
      where: { listId: listId, deletedAt: null },
    });
  }

  async updateItem(
    itemId: number,
    updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return await prisma.item.update({
      where: { id: itemId },
      data: updateItemDto,
    });
  }

  async deleteItem(itemId: number): Promise<Item> {
    return await prisma.item.update({
      where: { id: itemId },
      data: { deletedAt: new Date() },
    });
  }
}
