import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto.js';
import { UpdateItemDto } from './dto/update-item.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { Item } from 'generated/prisma/client.js';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createItemDto: CreateItemDto, listId: number): Promise<Item> {
    return await this.prisma.createItem(createItemDto, listId);
  }

  async findAll(listId: number): Promise<Item[]> {
    return await this.prisma.findAllItems(listId);
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  async update(itemId: number, updateItemDto: UpdateItemDto): Promise<Item> {
    return await this.prisma.updateItem(itemId, updateItemDto);
  }

  async remove(itemId: number): Promise<Item> {
    return await this.prisma.deleteItem(itemId);
  }
}
