import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaDocument = Media & Document;

@Schema()
export class Media {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  releaseDate: Date;

  @Prop({ required: true })
  runtime: number;

  @Prop({ type: [{ type: String }] })
  actors: string[];

  @Prop({ required: true })
  director: string;

  @Prop({ required: true })
  producer: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
