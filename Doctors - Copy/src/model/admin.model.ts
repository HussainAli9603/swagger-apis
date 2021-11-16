import { Schema, model, Mongoose } from 'mongoose';
import { IAdmin } from '../types/document/IAdmin';
const IAdminSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String }
  },
  { timestamps: true }
);
export const AdminSchema = model<IAdmin>('AdminSchema', IAdminSchema);