export interface SaveUpdateResDoctor {
  _id:string;
  FullName: string;
  Desgination: string;
  cell: string;
  JoinDate: string;
  adress: string;
  // like:object[];
  // dislike:object[];
  createdAt: string;
  updatedAt: string;
}

export interface RegisterUpdateResDoctor {
  like: any;
  _id:string;
  FirstName: string;
  email: string;
  cell: string;
  password: string;
  adress: string;
  disease: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterUpdateResPatient {
  _id:string;
  FullName: string;
  resetPasswordToken: string;
  resetPasswordExpires: number;
  email: number;
  otpCode: string;
  cell: string;
  password: string;
  adress: string;
  disease: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmailVerifyPatient {
  resetPasswordToken: string;
  resetPasswordExpires: number;
  email: number;
  otpCode: string;
}

export interface VerifyOtpCodes{
  email:string,
  otpCode:number
}
export interface ShowImage{
  _id:string,
  image:string,
  createdAt: string;
  updatedAt: string;
}








