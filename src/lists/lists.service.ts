import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dtos/create-list.dto.js';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class ListsService {
    constructor(private prismaService: PrismaService) { }

    async createList(createListDto: CreateListDto) {
        return await this.prismaService.create(createListDto);
    }

    async findAllLists() {
        return await this.prismaService.findAll();
    }
}
