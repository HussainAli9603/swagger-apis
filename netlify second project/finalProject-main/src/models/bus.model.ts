import { Schema, model, Mongoose } from 'mongoose';
import { IBUSDOCUMENT } from '../types/documents/bus.document';
const IBusSchema = new Schema(
    {
        bussName: { type: String },
        bussSeats: { type: String },
        bussBokingDates: [{
            startDate: "string",
            endDate: "string",
        }]
    },
    { timestamps: true }
);
export const BussSchema = model<IBUSDOCUMENT>('BussSchema', IBusSchema);

