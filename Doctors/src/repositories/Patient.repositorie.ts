import path from 'path/posix';
import { PatientSchema } from '../model/patient.model';
// import { ImageSchema } from '../model/images.model';
import { IPatient } from '../types/document/IPatient';
import { Iimage } from '../types/document/Iimage';

export class MainPatient {
  constructor() { }
  getPatient(_id: string) {
    return PatientSchema.findById(_id).populate('doctor');
  }
  saveDoctor(Patient: IPatient) {
    return new PatientSchema(Patient).save();
  }
  updateDoctor(Patient: IPatient) {
    return PatientSchema.findByIdAndUpdate(Patient._id, Patient, {
      new: true
    });
  }
  deletDoctor(_id: string) {
    return PatientSchema.findByIdAndDelete(_id);
  }
  getPatientlist() {
    return PatientSchema.find({}).populate({ 'path': 'doctor' });
  }

  // --------------------------Patient-----------------------------------
  RegisterPatient(regPatient: IPatient) {
    return new PatientSchema(regPatient).save()
  }
  PatientEmailFind(email: any) {
    return PatientSchema.findOne(email);
  }
  PatientAddressFind() {
    return PatientSchema.find({ adress: "swat" });
  }

  // --------------------------Forgot Password------------------------
  PatientForgotPassword(email: any) {
    return PatientSchema.findOne(email);
  }
  PatientSaveOTP(saveOTPCode: IPatient) {
    return new PatientSchema(saveOTPCode).save();
  }

  VerifyOTPCode(verifyCode: IPatient) {
    return new PatientSchema(verifyCode).save();
  }

  SaveChangePasswordss(changePass: IPatient) {
    return new PatientSchema(changePass).save();
  }

  //-------------------------------Search Patient-----------------------------------
  searchPatient(fullName: any) {
    return PatientSchema.find({ FullName: { $regex: new RegExp(fullName.FullName, 'i') } }).populate('doctor');
  }
  searchPatientByLoca(diseases: any, location: any) {
    return PatientSchema.find({ disease: { $regex: new RegExp(diseases, 'i') }, adress: { $regex: new RegExp(location, 'i') } }).populate('doctor');
  }

  DeletePatient(_id: any) {
    return PatientSchema.findByIdAndDelete(_id);
  }

  fileDownloadPatient() {
    return PatientSchema.find();
  }
  findSpecficPatient() {
    var currentDate = new Date();
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 1} 00:59`);
    let prev = new Date(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 1} 23:59`);
    let end = new Date(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} 23:59`);
    let c = new Date("2021-9-14 23:59");
    console.log(prev, end, c, currentDate)
    return PatientSchema.find({ createdAt: { $gte: prev, $lt: end } });
  }













}
