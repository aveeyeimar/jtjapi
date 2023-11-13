/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesDocument = Sales & Document;

@Schema()
export class Sales {
  @Prop()
  isUser: string;
  @Prop()
  ofert: string;

  @Prop()
  neigborhood: string;

  @Prop()
  property: string;

  @Prop()
  stratum: string;

  @Prop()
  breed: string;

  @Prop()
  price: string;

  @Prop()
  room: string;

  @Prop()
  restroom: string;

  @Prop()
  age: string;

  @Prop()
  administration: string;

  @Prop()
  area: string;

  @Prop()
  description: string;

  @Prop([String])
  picture: string[];
}

export const SaleSchema = SchemaFactory.createForClass(Sales);