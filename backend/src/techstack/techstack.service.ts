import { Injectable } from '@nestjs/common';
import { CreateTechstackDto } from './dto/create-techstack.dto';
import { UpdateTechstackDto } from './dto/update-techstack.dto';

@Injectable()
export class TechstackService {
  create(createTechstackDto: CreateTechstackDto) {
    return 'This action adds a new techstack';
  }

  findAll() {
    return `This action returns all techstack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} techstack`;
  }

  update(id: number, updateTechstackDto: UpdateTechstackDto) {
    return `This action updates a #${id} techstack`;
  }

  remove(id: number) {
    return `This action removes a #${id} techstack`;
  }
}
