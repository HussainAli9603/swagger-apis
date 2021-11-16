import { Document } from 'mongoose';
export interface IRegion extends Document {
  _id:string;
  name: string;
  nameKey: string;
  code: string;
  links:LLinks[];
}
export interface LLinks{
    rel:string,
    href:string,
}
