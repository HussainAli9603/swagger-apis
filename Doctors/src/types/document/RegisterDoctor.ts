import { Document } from 'mongoose';
export interface RegisterDoctors extends Document {
  _id:string;
  userName: string;
  email:string;
  password:string;
  createdAt?: string;
  updatedAt?: string;
}