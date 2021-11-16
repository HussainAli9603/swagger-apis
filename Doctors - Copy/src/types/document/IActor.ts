import { Document } from 'mongoose';
export interface IActor extends Document {
    _id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}