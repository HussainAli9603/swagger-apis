import { Document, Schema } from "mongoose";
export interface IBUSDOCUMENT extends Document {
    _id: string;
    bussName: string;
    bussSeats: number;
    bussBookingDates: Date[]
    createdAt?: Date | any;
    updatedAt?: Date | any
}

