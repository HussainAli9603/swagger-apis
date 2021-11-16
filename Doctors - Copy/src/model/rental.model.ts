import { Schema, model, Mongoose } from 'mongoose';
import { IRental } from '../types/document/IRental';
const IRentalSchema = new Schema(
    {
        customerId: { type: Schema.Types.ObjectId, ref: "CustomerSchema" },
        staffId: { type: Schema.Types.ObjectId, ref: "StaffSchema" },
        filmId: { type: Schema.Types.ObjectId, ref: "FilmSchema" },
        rentalDate: { type: String },
        returnDate: { type: String },
    },
    { timestamps: true }
);
export const RentalSchema = model<IRental>('RentalSchema', IRentalSchema);