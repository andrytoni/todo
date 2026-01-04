import { Module } from '@nestjs/common';
import { ListsModule } from './lists/lists.module.js';
import { ItemsModule } from './items/items.module.js';

@Module({
  imports: [ListsModule, ItemsModule],
  providers: [],
})
export class AppModule {}
