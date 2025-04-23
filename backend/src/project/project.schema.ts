import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProjectCategory } from './enums/project.category.enum';
import { ToolCategory } from './enums/project.tools.enum';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], enum: ProjectCategory })
  tags: ProjectCategory[];

  @Prop()
  overview: string;

  @Prop()
  reflections: string;

  @Prop()
  challenge: string;

  @Prop()
  lineRationale: string;

  @Prop({ type: [String], enum: ToolCategory })
  tools: ToolCategory[];

  @Prop({
    type: {
      github: { type: String },
      vercel: { type: String },
      behance: { type: String },
      dribbble: { type: String },
    },
    default: {},
  })
  links?: {
    github?: string;
    vercel?: string;
    behance?: string;
    dribbble?: string;
  };

  @Prop([String])
  images?: string[];

  @Prop([String])
  videos?: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
