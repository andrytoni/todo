import { Module } from '@nestjs/common';
import { ListsModule } from './lists/lists.module.js';
import { PrismaService } from './prisma.service.js';

@Module({
  imports: [ListsModule],
  providers: [PrismaService],
})
export class AppModule {}
