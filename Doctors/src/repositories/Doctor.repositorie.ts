import { DoctorSchema } from '../model/doctor.model';
import { IDoctor } from '../types/document/IDoctor';
import { RegisterDoctorSchemaa } from '../model/register.doctor.model';
import { PatientSchema } from '../model/patient.model';
import { RegisterDoctors } from '../types/document/RegisterDoctor';
import { IPatient } from '../types/document/IPatient';
export class MainDoctor {
  constructor() {}
  getDoctor(_id: string) {
    return DoctorSchema.findById(_id);
  }
  saveDoctor(Doctor: IDoctor) {
    return new DoctorSchema(Doctor).save();
  }
  updateDoctor(Doctors: IDoctor) {
    return DoctorSchema.findByIdAndUpdate(Doctors._id, Doctors, {
      new: true
    });
  }
  deletDoctor(_id: string) {
    return DoctorSchema.findByIdAndDelete(_id);
  }
  getDoctorlist() {
   return DoctorSchema.find();
  }
// --------------------------Register Doctor-----------------------------------
   RegisterDoctor(regDoctor:RegisterDoctors){
     return new RegisterDoctorSchemaa(regDoctor).save()
   }
   EmailFind(email:any){
    return RegisterDoctorSchemaa.findOne(email);
   }

   getDoctorId(doctorId:string){
     return DoctorSchema.findById(doctorId)
   }
   getUserId(userId:string){
    return PatientSchema.findById(userId)
  }

  

  
}