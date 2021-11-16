import { Document } from 'mongoose';
export interface Iimage extends Document {
  _id:string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}