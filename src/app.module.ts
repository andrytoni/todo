import { Module } from '@nestjs/common';
import { ItemsController } from './modules/item.controller';
import { ItemsService } from './app.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
