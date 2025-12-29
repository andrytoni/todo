import { Module } from '@nestjs/common';
import { ListController } from './items.controller';
import { ListService } from './items.service';

@Module({
  controllers: [ListController],
  providers: [ListService],
})
export class ItemsModule {}
