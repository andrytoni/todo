import { Injectable } from '@nestjs/common';
import { prisma } from '../prisma/prisma.js';
import { CreateListDto } from './lists/dtos/create-list.dto.js';
// import { List } from 'src/lists/list.interface';

@Injectable()
export class PrismaService {
  async create(createListDto: CreateListDto) {
    return await prisma.list.create({ data: { ...createListDto, createdAt: new Date(), updatedAt: new Date() } })
  }
  async findAll() {
    return await prisma.list.findMany()
  }
}