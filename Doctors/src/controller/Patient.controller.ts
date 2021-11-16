import { IPatient } from '../types/document/IPatient';
import { Iimage } from '../types/document/Iimage';
import { MainPatient } from '../repositories/Patient.repositorie';
import CustomeError from '../utills/error';
import { Route, Tags, Post, Body, Get, Delete } from "tsoa";
import { RegisterUpdateResPatient, EmailVerifyPatient, VerifyOtpCodes, ShowImage } from '../types/response/Doctor.response';
import { GetPatient, RegisterPatient, loginPatient, forgotPassword, verifyOTPCode, changePassword, searchPatient, DeletePatient, searchPatientByLocation, UploadImage } from '../types/request/Doctor.request';


@Route('patient')
@Tags('patient')
export class PatientController {
  constructor() { }
  @Post('/patient-register')
  async registerPatient(@Body() regPatient: RegisterPatient): Promise<RegisterUpdateResPatient> {
    const new_register: any = await new MainPatient().RegisterPatient(<IPatient><unknown>(regPatient));
    return <RegisterUpdateResPatient>(new_register)
  }

  @Post('/patient-loginUser')
  async loginEmailUser(@Body() loginUsers: loginPatient): Promise<RegisterUpdateResPatient> {
    const login_patient: any = await new MainPatient().PatientEmailFind(<IPatient>(loginUsers));
    return <RegisterUpdateResPatient>(login_patient)
  }

  @Post('/getPatientlist')
  async getPatientList(): Promise<RegisterUpdateResPatient[]> {
    const doctor: IPatient[] = await new MainPatient().getPatientlist().limit(3);
    return <RegisterUpdateResPatient[]><unknown>(doctor);
  }

  @Post("/getPatient")
  async getPatient(@Body() getreq: GetPatient): Promise<RegisterUpdateResPatient> {
    const patient: any = await new MainPatient().getPatient(getreq.id);
    if (patient === null) throw new CustomeError(404, 'Patient not found');
    return <RegisterUpdateResPatient>patient;
  }

  @Get("/get-PatientByAddress")
  async getPatientByCity(): Promise<RegisterUpdateResPatient> {
    const patient: any = await new MainPatient().PatientAddressFind();
    if (patient === null) throw new CustomeError(404, 'Patient not found');
    return <RegisterUpdateResPatient>patient;
  }
  // -------------------------------------Change Password-----------------------------------
  @Post("/forgot-password")
  async forgotPass(@Body() getReq: forgotPassword): Promise<EmailVerifyPatient> {
    const forgotPasswords: any = await new MainPatient().PatientForgotPassword(getReq)
    return <EmailVerifyPatient>(forgotPasswords)
  }
  async sendOTPCOde(getReq: forgotPassword): Promise<EmailVerifyPatient> {
    const send_OTP: any = await new MainPatient().PatientSaveOTP(<IPatient>(getReq));
    return <EmailVerifyPatient>(send_OTP)
  }

  @Post("/verify-OTPCode")
  async verifyEamil(@Body() getReq: verifyOTPCode): Promise<VerifyOtpCodes> {
    const forgotPasswords: any = await new MainPatient().PatientForgotPassword(getReq)
    return <VerifyOtpCodes>(forgotPasswords)
  }
  async VerifyOTPCOde(getReq: verifyOTPCode): Promise<EmailVerifyPatient> {
    const verify_OTP: any = await new MainPatient().VerifyOTPCode(<IPatient>(getReq));
    return <EmailVerifyPatient>(verify_OTP)
  }

  @Post("/change-password")
  async changePasswords(@Body() getReq: changePassword): Promise<RegisterUpdateResPatient> {

    const changePass: any = await new MainPatient().PatientForgotPassword(getReq);
    return <RegisterUpdateResPatient>(changePass)
  }
  async SaveChangePassword(getReq: changePassword): Promise<RegisterUpdateResPatient> {
    const SavePassword: any = await new MainPatient().SaveChangePasswordss(<IPatient><unknown>(getReq));
    return <RegisterUpdateResPatient>(SavePassword)
  }

  @Post("/search")
  async SearchPatient(@Body() getReq: searchPatient): Promise<RegisterUpdateResPatient> {
    const new_search: any = await new MainPatient().searchPatient(getReq)
    return <RegisterUpdateResPatient>(new_search)
  }

  @Post("/search-by-location")
  async SearchByLocations(@Body() getReq: searchPatientByLocation): Promise<RegisterUpdateResPatient> {
    const search_location: any = await new MainPatient().searchPatientByLoca(getReq.disease, getReq.adress);
    return <RegisterUpdateResPatient>(search_location)
  }

  @Delete('/delete')
  async deletePatients(@Body() getReq: DeletePatient): Promise<RegisterUpdateResPatient> {
    const delete_patient: any = await new MainPatient().DeletePatient(getReq);
    return <RegisterUpdateResPatient>(delete_patient)
  }


  @Get('/save-file-download')
  async fileDownloadPatients(): Promise<RegisterUpdateResPatient> {
    const download_patient: any = await new MainPatient().fileDownloadPatient();
    return <RegisterUpdateResPatient>(download_patient)
  }

  async findDatePatient(): Promise<RegisterUpdateResPatient> {
    const patient: any = await new MainPatient().findSpecficPatient();
    return <RegisterUpdateResPatient>(patient)
  }




}

