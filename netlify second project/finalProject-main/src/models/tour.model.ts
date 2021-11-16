import { Schema, model, Mongoose } from 'mongoose';
import { ITOURDOCUMENT } from '../types/documents/tour.document';
const ITourSchema = new Schema(
    {
        Destinations: { type: String },
        Date: { type: String },
        Participants: { type: String },
        Phone: { type: String },
        Name: { type: String },
        BusAlloted: [{
            type: String
        }]
    },
    { timestamps: true }
);
export const TourSchema = model<ITOURDOCUMENT>('TourSchema', ITourSchema);