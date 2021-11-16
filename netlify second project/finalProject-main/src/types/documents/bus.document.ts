import { Document, Schema } from "mongoose";
export interface IBUSDOCUMENT extends Document {
    _id: string;
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBooking[];
    createdAt?: Date | any;
    updatedAt?: Date | any
}
export interface BussBooking {
    startDate: string,
    endDate: string,
}
