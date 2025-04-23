import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { NotFoundException } from '@nestjs/common';
import { ToolCategory } from './enums/project.tools.enum';
import { ProjectCategory } from './enums/project.category.enum';

describe('ProjectsController', () => {
  let controller: ProjectController;
  let service: ProjectService;

  const mockProject = {
    _id: '680688305fe257623eb4f1d0',
    title: 'Novo Projeto',
    description: 'Este é um projeto de teste',
    tags: ['web', 'frontend'],
  };

  const mockProjectsService = {
    create: jest.fn().mockResolvedValue(mockProject),
    findAll: jest.fn().mockResolvedValue([mockProject]),
    findOne: jest.fn().mockResolvedValue(mockProject),
    update: jest.fn().mockResolvedValue({
      ...mockProject,
      title: 'Projeto Atualizado',
    }),
    partialUpdate: jest.fn().mockResolvedValue({
      ...mockProject,
      title: 'Projeto Parcialmente Atualizado',
    }),
    remove: jest.fn().mockResolvedValue({ deleted: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: ProjectService,
          useValue: mockProjectsService,
        },
      ],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a project', async () => {
      const createProjectDto = {
        title: 'Novo Projeto',
        description: 'Este é um projeto de teste',
        tags: [ProjectCategory.Web, ProjectCategory.FRONTEND],
        overview: 'Uma visão geral do projeto',
        reflections: 'Reflexões sobre o projeto',
        challenge: 'Desafio enfrentado no projeto',
        lineRationale: 'Justificativa do projeto',
        tools: [ToolCategory.REACT, ToolCategory.NODE_JS] /*  */,
        links: {
          github: 'https://github.com/usuario/projeto',
          vercel: 'https://projeto.vercel.app',
        },
        images: ['https://linkparaimagem.com/image1.png'],
        videos: ['https://linkparavideo.com/video1.mp4'],
      };

      const result = await controller.create(createProjectDto);
      expect(result).toEqual(mockProject);
      expect(service.create).toHaveBeenCalledWith(createProjectDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of projects', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockProject]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a project by ID', async () => {
      const result = await controller.findOne('680688305fe257623eb4f1d0');
      expect(result).toEqual(mockProject);
      expect(service.findOne).toHaveBeenCalledWith('680688305fe257623eb4f1d0');
    });

    it('should throw NotFoundException if project is not found', async () => {
      mockProjectsService.findOne.mockRejectedValueOnce(
        new NotFoundException('Project not found'),
      );
      await expect(controller.findOne('invalid-id')).rejects.toThrowError(
        new NotFoundException('Project not found'),
      );
    });
  });

  describe('update', () => {
    it('should update a project', async () => {
      const updateProjectDto = {
        title: 'Projeto Atualizado',
      };
      const result = await controller.update(
        '680688305fe257623eb4f1d0',
        updateProjectDto,
      );
      expect(result.title).toEqual('Projeto Atualizado');
      expect(service.update).toHaveBeenCalledWith(
        '680688305fe257623eb4f1d0',
        updateProjectDto,
      );
    });

    it('should throw NotFoundException if project is not found', async () => {
      mockProjectsService.update.mockRejectedValueOnce(
        new NotFoundException('Project not found'),
      );
      await expect(controller.update('invalid-id', {})).rejects.toThrowError(
        new NotFoundException('Project not found'),
      );
    });
  });

  describe('partialUpdate', () => {
    it('should partially update a project', async () => {
      const updateProjectDto = {
        title: 'Projeto Parcialmente Atualizado',
      };
      const result = await controller.partialUpdate(
        '680688305fe257623eb4f1d0',
        updateProjectDto,
      );
      expect(result.title).toEqual('Projeto Parcialmente Atualizado');
      expect(service.partialUpdate).toHaveBeenCalledWith(
        '680688305fe257623eb4f1d0',
        updateProjectDto,
      );
    });

    it('should throw NotFoundException if project is not found', async () => {
      mockProjectsService.partialUpdate.mockRejectedValueOnce(
        new NotFoundException('Project not found'),
      );
      await expect(
        controller.partialUpdate('invalid-id', {}),
      ).rejects.toThrowError(new NotFoundException('Project not found'));
    });
  });

  describe('remove', () => {
    it('should delete a project', async () => {
      const result = await controller.remove('680688305fe257623eb4f1d0');
      expect(result).toEqual({ deleted: true });
      expect(service.remove).toHaveBeenCalledWith('680688305fe257623eb4f1d0');
    });

    it('should throw NotFoundException if project is not found', async () => {
      mockProjectsService.remove.mockRejectedValueOnce(
        new NotFoundException('Project not found'),
      );
      await expect(controller.remove('invalid-id')).rejects.toThrowError(
        new NotFoundException('Project not found'),
      );
    });
  });
});
