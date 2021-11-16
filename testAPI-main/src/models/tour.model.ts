import { Schema, model, Mongoose } from 'mongoose';
import { ITOURDOCUMENT } from '../types/documents/tour.document';
const ITourSchema = new Schema(
    {
        Destinations: { type: Array },
        Date: { type: String },
        Participants: { type: Number },
        Phone: { type: String },
        Name: { type: String },
        BusAlloted: [{
            type: Array

        }]
    },
    { timestamps: true }
);
export const TourSchema = model<ITOURDOCUMENT>('TourSchema', ITourSchema);