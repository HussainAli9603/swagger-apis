import { Schema, model } from 'mongoose';
import { IDoctor } from '../types/document/IDoctor';
const IDoctorSchema = new Schema(
  {
    FullName: { type: String },
    Desgination: { type: String },
    cell: { type: String },
    JoinDate: { type: String },
    adress: { type: String },
    like:[{
        type:Schema.Types.ObjectId,
        ref:"PatientSchema"
   }],
   dislike:[{
    patientId:{
      type:Schema.Types.ObjectId,
      ref:"PatientSchema"
    }
  }]
  },
  { timestamps: true }
);
export const DoctorSchema = model<IDoctor>('DoctorSchema', IDoctorSchema);