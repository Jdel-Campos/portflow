import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectService } from './project.service';
import { Project } from './project.schema';
import { NotFoundException } from '@nestjs/common';
import { ToolCategory } from './enums/project.tools.enum';
import { ProjectCategory } from './enums/project.category.enum';

describe('ProjectsService', () => {
  let service: ProjectService;
  let projectModel: Model<Project>;

  const mockProject = {
    _id: '680688305fe257623eb4f1d0',
    title: 'Novo Projeto',
    description: 'Este é um projeto de teste',
    tags: ['web', 'frontend'],
    overview: 'Visão geral do projeto de teste',
    processMethodology: 'Metodologia ágil',
    challengesSolutions: 'Desafios enfrentados e soluções aplicadas',
    resultsAchievements: 'Resultados alcançados com sucesso',
    learningsReflections: 'Aprendizados importantes',
    tools: ['React', 'Next.js', 'TypeScript'],
    links: {
      github: 'https://github.com/seu-usuario/novo-projeto',
      vercel: 'https://novo-projeto.vercel.app',
    },
    images: [
      'https://exemplo.com/imagem1.jpg',
      'https://exemplo.com/imagem2.jpg',
    ],
    videos: ['https://exemplo.com/video1.mp4'],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockProjectModel = {
    create: jest.fn().mockImplementation((dto) => ({
      ...dto,
      _id: '680688305fe257623eb4f1d0',
      createdAt: new Date(),
      updatedAt: new Date(),
      save: jest.fn().mockResolvedValue(mockProject),
    })),
    find: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue([mockProject]),
    }),
    findById: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockProject),
    }),
    findByIdAndUpdate: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue({
        ...mockProject,
        title: 'Projeto Atualizado',
        description: 'Descrição atualizada',
      }),
    }),
    findByIdAndDelete: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockProject),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getModelToken('Project'),
          useValue: mockProjectModel,
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    projectModel = module.get<Model<Project>>(getModelToken('Project'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
        tools: [ToolCategory.REACT, ToolCategory.NODE_JS],
        links: {
          github: 'https://github.com/usuario/projeto',
          vercel: 'https://projeto.vercel.app',
        },
        images: ['https://linkparaimagem.com/image1.png'],
        videos: ['https://linkparavideo.com/video1.mp4'],
      };

      const result = await service.create(createProjectDto);
      expect(result).toEqual(mockProject);
      expect(projectModel.create).toHaveBeenCalledWith(createProjectDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of projects', async () => {
      const result = await service.findAll();
      expect(result).toEqual([mockProject]);
      expect(projectModel.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a project by ID', async () => {
      const result = await service.findOne('680688305fe257623eb4f1d0');
      expect(result).toEqual(mockProject);
      expect(projectModel.findById).toHaveBeenCalledWith('680688305fe257623eb4f1d0');
    });

    it('should throw NotFoundException if project is not found', async () => {
      projectModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue(null),
      });
      await expect(service.findOne('invalid-id')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a project', async () => {
      const updateProjectDto = {
        title: 'Projeto Atualizado',
        description: 'Descrição atualizada',
      };
      const result = await service.update('680688305fe257623eb4f1d0', updateProjectDto);
      expect(result.title).toEqual('Projeto Atualizado');
      expect(projectModel.findByIdAndUpdate).toHaveBeenCalledWith(
        '680688305fe257623eb4f1d0',
        updateProjectDto,
        { new: true, runValidators: true },
      );
    });

    it('should throw NotFoundException if project is not found', async () => {
      projectModel.findByIdAndUpdate.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue(null),
      });
      await expect(service.update('invalid-id', {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a project', async () => {
      const result = await service.remove('680688305fe257623eb4f1d0');
      expect(result).toEqual(mockProject);
      expect(projectModel.findByIdAndDelete).toHaveBeenCalledWith('680688305fe257623eb4f1d0');
    });

    it('should throw NotFoundException if project is not found', async () => {
      projectModel.findByIdAndDelete.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue(null),
      });
      await expect(service.remove('invalid-id')).rejects.toThrow(NotFoundException);
    });
  });
});
