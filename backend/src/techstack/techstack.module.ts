import { Module } from '@nestjs/common';
import { TechstackService } from './techstack.service';
import { TechstackController } from './techstack.controller';

@Module({
  controllers: [TechstackController],
  providers: [TechstackService],
})
export class TechstackModule {}
