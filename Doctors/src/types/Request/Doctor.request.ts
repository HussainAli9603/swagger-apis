import { StringLiteralLike } from "typescript";

export interface SaveReqDoctor{
  FullName: string;
  Desgination: string;
  cell: string;
  JoinDate: string;
  adress: string;
}
export interface UpdateReqDoctor {
  _id: string;
  FullName: string;
  Desgination: string;
  cell: string;
  JoinDate: string;
  adress: string;
}
export interface GetDoctor {
  id: string
}
export interface DeleteDoctor {
  id: string
}

export interface RegisterDoctor{
   userName:string;
   email:string;
   password:string;
}
export interface loginDoctor{
  email:string;
  password:string;
}

export interface RegisterPatient{
  FullName: string;
  email: string;
  cell: string;
  password: string;
  adress: string;
  disease: string;
  doctor:Array<string>;
}

export interface loginPatient{
  email:string;
  password:string;
}

export interface GetPatient {
  id: string
}
export interface GetPatientByAddress {
  adress: string
}

export interface forgotPassword {
  email: string
}
export interface verifyOTPCode{
  email:string;
  otpCode:number
}
export interface changePassword{
  email:string;
  newPassword:string;
  confirmPassword:string;
}
export interface searchPatient{
  FullName:string;
}

export interface searchPatientByLocation{
  disease:string;
  adress:string
}

export interface DeletePatient{
  _id:string;
}

export interface UploadImage{
  image:string
}


export interface like{
  userId:string
  doctorId:string
}






