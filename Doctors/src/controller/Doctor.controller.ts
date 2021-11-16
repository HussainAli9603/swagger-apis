import { IDoctor } from '../types/document/IDoctor';
import { RegisterDoctors } from '../types/document/RegisterDoctor';
import { MainDoctor } from '../repositories/Doctor.repositorie';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security,Request } from "tsoa";
import { SaveUpdateResDoctor,RegisterUpdateResDoctor } from '../types/response/Doctor.response';
import { DeleteDoctor, GetDoctor, SaveReqDoctor,UpdateReqDoctor,RegisterDoctor,loginDoctor,like } from '../types/request/Doctor.request';
@Route('doctor')
@Tags('doctor')
export class DoctorController {
  constructor() { }
/**
 * jskhd ksjhdkjsahd skhdjkshdkjs sd sdsdsds
 * @summary Get Doctro
 * 
 */
 @Security("api_key")
  @Post("/getDoctor")
  async getdoctor(@Body() getreq:GetDoctor): Promise<SaveUpdateResDoctor> {
    const doctor: any = await new MainDoctor().getDoctor(getreq.id);
    if (doctor === null) throw new CustomeError(404, 'Doctor not found');
    return <SaveUpdateResDoctor>doctor;
  }
  /**
 * 
 * @summary Save Doctor 
 * 
 */
  @Post('/savedoctor')
  async savedoctor(@Body() doctor: SaveReqDoctor): Promise<SaveUpdateResDoctor> {
    const new_admin:any = await new MainDoctor().saveDoctor(<IDoctor><unknown>(doctor));
    return <SaveUpdateResDoctor>(new_admin);
  }
  @Put('/updatedoctor')
  async updateDoctor(@Body() doctor: UpdateReqDoctor): Promise<SaveUpdateResDoctor> {
    const update_doctor:any = await new MainDoctor().updateDoctor(<IDoctor><unknown>(doctor));
    if (update_doctor === null)
      throw new CustomeError(400, 'Doctor not updated');
    return <SaveUpdateResDoctor>update_doctor;
  }
  @Security("jwt")
  @Delete('/deletedoctor')
  @SuccessResponse("200","Doctor deleted")
  async deletdoctor(@Request() request:any,@Body() delreq: DeleteDoctor) {
    return await new MainDoctor().deletDoctor(delreq.id);
  }
  @Security("jwt")
  @Post('/getDoctorlist')
  async getdoctorList(@Request() request:any): Promise<SaveUpdateResDoctor[]> {
    const doctor: IDoctor[] = await new MainDoctor().getDoctorlist().limit(3);
    return <SaveUpdateResDoctor[]><unknown>(doctor);
  }

  @Post('/register')
  async registerDoctor(@Body() regDoctor:RegisterDoctor):Promise<RegisterUpdateResDoctor> {
    const new_register:any = await new MainDoctor().RegisterDoctor(<RegisterDoctors><unknown>(regDoctor));
    return <RegisterUpdateResDoctor>(new_register)
  }

  @Post('/loginUser')
  async loginEmailUser(@Body() loginUse: loginDoctor):Promise<RegisterUpdateResDoctor>{
    const login_doctor:any = await new MainDoctor().EmailFind(<RegisterDoctors>(loginUse));
    return <RegisterUpdateResDoctor>(login_doctor)
  }

  @Put('/like')
  async findDoctorById(@Body() idd:like):Promise<RegisterUpdateResDoctor>{
    const new_like:any = await new MainDoctor().getDoctorId(idd.doctorId)
    return <RegisterUpdateResDoctor>(new_like)
  }
  async findPatientById(@Body() idd:like):Promise<SaveUpdateResDoctor>{
    const new_like:any = await new MainDoctor().getUserId(idd.userId)
    return <SaveUpdateResDoctor>(new_like)
  }
  


}

