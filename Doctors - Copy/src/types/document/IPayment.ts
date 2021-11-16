import { Document } from 'mongoose';
export interface IPayment extends Document {
    name: string | RegExp;
    _id: string;
    rentalId: string;
    staffId: string;
    customerId: string;
    amount: string;
    createdAt?: string;
    updatedAt?: string;
}