import { Schema, model, Mongoose } from 'mongoose';
import { IBUSDOCUMENT } from '../types/documents/bus.document';
const IBusSchema = new Schema(
    {
        bussName: { type: String },
        bussSeats: { type: Number },
        bussBookingDates: [Date()]
    },
    { timestamps: true }
);
export const BussSchema = model<IBUSDOCUMENT>('BussSchema', IBusSchema);


