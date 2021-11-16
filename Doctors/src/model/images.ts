import { Schema, model, Mongoose } from 'mongoose';
import { Iimage } from '../types/document/Iimage';
const IimageSchema = new Schema(
  {
    image: { type: String },
  },
  { timestamps: true }
);
export const ImageSchema = model<Iimage>('ImageSchema', IimageSchema);