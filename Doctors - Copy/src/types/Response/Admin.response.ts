export interface SaveUpdateResAdmin {
  _id: string;
  name: string;
  email: string;
  psssword: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResCategory {
  _id: string;
  category: string;
}
export interface ResActor {
  _id: string;
  name: string;
}

export interface SaveUpdateResFilm {
  _id: string;
  title: string;
  description: string;
  language: string;
  release_year: string;
  rental_duration: string;
  rental_rate: string;
  length: string;
  replacement_cost: string;
  actor: ActorData1[];
}
export interface ActorData1 {
  _id: string[]
}







export interface EmailVerifyPatient {
  resetPasswordToken: string;
  resetPasswordExpires: number;
  email: number;
  otpCode: string;
}

export interface VerifyOtpCodes {
  email: string,
  otpCode: number
}
export interface ShowImage {
  _id: string,
  image: string,
  createdAt: string;
  updatedAt: string;
}








