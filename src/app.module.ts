import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ListsModule } from './lists/lists.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [ItemsModule, ListsModule],
  providers: [PrismaService],
})
export class AppModule {}
