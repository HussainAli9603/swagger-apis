import { Schema, model } from 'mongoose';
import { RegisterDoctors } from '../types/document/RegisterDoctor';
const RegisterDoctorSchema = new Schema(
  {
    userName: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);
export const RegisterDoctorSchemaa = model<RegisterDoctors>('registerDoctorSchema', RegisterDoctorSchema);