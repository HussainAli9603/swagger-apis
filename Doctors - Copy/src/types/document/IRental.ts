import { Document } from 'mongoose';
export interface IRental extends Document {
    _id: string;
    customerId: string;
    staffId: string;
    filmId: string;
    rentalDate: string;
    returnDate: string;
    createdAt?: string;
    updatedAt?: string;
}