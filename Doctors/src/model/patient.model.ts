import { Schema, model, Mongoose } from 'mongoose';
import { IPatient } from '../types/document/IPatient';
const IPatientSchema = new Schema(
  {
    FullName: { type: String },
    email: { type: String },
    cell: { type: String },
    password: { type: String },
    adress: { type: String },
    disease: { type: String },
    otpCode:{ type:Number,default:"0" },
    resetPasswordToken:{ type: String },
    resetPasswordExpires:{ type: String },
    doctor:[{
       type:Schema.Types.ObjectId,
       ref:"DoctorSchema"
    }]
  },
  { timestamps: true }
);
export const PatientSchema = model<IPatient>('PatientSchema', IPatientSchema);