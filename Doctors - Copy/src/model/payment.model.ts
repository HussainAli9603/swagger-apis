import { Schema, model, Mongoose } from 'mongoose';
import { IPayment } from '../types/document/IPayment';
const IPaymentSchema = new Schema(
    {
        rentalId: { type: Schema.Types.ObjectId, ref: "RentalSchema" },
        staffId: { type: Schema.Types.ObjectId, ref: "StaffSchema" },
        customerId: { type: Schema.Types.ObjectId, ref: "CustomerSchema" },
        amount: { type: Number },
    },
    { timestamps: true }
);

export const PaymentSchema = model<IPayment>('PaymentSchema', IPaymentSchema);