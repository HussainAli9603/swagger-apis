import { Document } from 'mongoose';
export interface IPatient extends Document {
  _id:string;
  FullName: string;
  email: string;
  cell: string;
  password: string;
  adress: string;
  disease: string;
  otpCode:number;
  resetPasswordToken:string;
  resetPasswordExpires:string;
  doctor:object[];
 
}