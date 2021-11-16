import { Document } from 'mongoose';
export interface IDoctor extends Document {
  _id:string;
  FirstName: string;
  Desgination: string;
  cell: string;
  JoinDate: string;
  adress: string;
  like:object[];
  createdAt?: string;
  updatedAt?: string;
}