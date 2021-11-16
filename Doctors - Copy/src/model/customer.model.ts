import { Schema, model, Mongoose } from 'mongoose';
import { ICustomer } from '../types/document/ICustomer';
const ICustomerSchema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        password: { type: String },
        address: { type: String },
        active: { type: Number, default: 1 }

    },
    { timestamps: true }
);
export const CustomerSchema = model<ICustomer>('CustomerSchema', ICustomerSchema);