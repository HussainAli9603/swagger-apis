export interface RegisterReqAdmin {
  name: string;
  email: string;
  password: string;
}

export interface UpdateReqFilm {
  title: string;
  description: string;
  language: string;
  release_year: string;
  rental_duration: string;
  rental_rate: string;
  length: string;
  replacement_cost: string;
  actor: string[];
}
export interface ActorData {
  _id: string[]
}

export interface Category {
  title: string
}
export interface Actors {
  name: string
}





export interface RegisterDoctor {
  userName: string;
  email: string;
  password: string;
}
export interface loginDoctor {
  email: string;
  password: string;
}

export interface RegisterPatient {
  FullName: string;
  email: string;
  cell: string;
  password: string;
  adress: string;
  disease: string;
  doctor: Array<string>;
}

export interface loginPatient {
  email: string;
  password: string;
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
export interface verifyOTPCode {
  email: string;
  otpCode: number
}
export interface changePassword {
  email: string;
  newPassword: string;
  confirmPassword: string;
}
export interface searchPatient {
  FullName: string;
}

export interface searchPatientByLocation {
  disease: string;
  adress: string
}

export interface DeletePatient {
  _id: string;
}







