import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechstackService } from './techstack.service';
import { CreateTechstackDto } from './dto/create-techstack.dto';
import { UpdateTechstackDto } from './dto/update-techstack.dto';

@Controller('techstack')
export class TechstackController {
  constructor(private readonly techstackService: TechstackService) {}

  @Post()
  create(@Body() createTechstackDto: CreateTechstackDto) {
    return this.techstackService.create(createTechstackDto);
  }

  @Get()
  findAll() {
    return this.techstackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techstackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechstackDto: UpdateTechstackDto) {
    return this.techstackService.update(+id, updateTechstackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techstackService.remove(+id);
  }
}
