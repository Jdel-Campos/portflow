import { IsEnum, IsString, IsNotEmpty, IsOptional, IsArray, IsObject } from 'class-validator';
import { ProjectCategory } from '../enums/project.category.enum';
import { ToolCategory } from '../enums/project.tools.enum';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsEnum(ProjectCategory, { each: true })
  tags: ProjectCategory[];

  @IsString()
  @IsNotEmpty()
  overview: string;

  @IsString()
  @IsNotEmpty()
  reflections: string;

  @IsString()
  @IsNotEmpty()
  challenge: string;

  @IsString()
  @IsNotEmpty()
  lineRationale: string;

  @IsArray()
  @IsEnum(ToolCategory, { each: true })
  tools: ToolCategory[];

  @IsOptional()
  @IsObject()
  links?: {
    github?: string;
    vercel?: string;
    behance?: string;
    dribbble?: string;
  };

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  videos?: string[];
}
