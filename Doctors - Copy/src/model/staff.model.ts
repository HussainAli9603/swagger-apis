import { Schema, model, Mongoose } from 'mongoose';
import { IStaff } from '../types/document/IStaff';
const IStaffSchema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        password: { type: String },
        address: { type: String },
        store: { type: String },
        paymentId: [{ type: Schema.Types.ObjectId, ref: "PaymentSchema" }],
        picUrl: { type: String },
        active: { type: Number, default: 1 }

    },
    { timestamps: true }
);
export const StaffSchema = model<IStaff>('StaffSchema', IStaffSchema);