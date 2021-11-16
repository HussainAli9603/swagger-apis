import { Document } from 'mongoose';
export interface IStaff extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    store: string;
    paymentId: string;
    active: number;
    picUrl: string;
    createdAt?: string;
    updatedAt?: string;
}