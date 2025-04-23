import { Test, TestingModule } from '@nestjs/testing';
import { TechstackController } from './techstack.controller';
import { TechstackService } from './techstack.service';

describe('TechstackController', () => {
  let controller: TechstackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechstackController],
      providers: [TechstackService],
    }).compile();

    controller = module.get<TechstackController>(TechstackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
