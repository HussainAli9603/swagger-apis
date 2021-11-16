import { MainUser } from '../repositories/User.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request } from "tsoa";
import { ResCustomer, ResPayment, ResRental, ResStaff } from '../types/response/User.response';
import { ReqCustomer, ReqPayment, ReqRental, ReqStaff, GetPaymentById } from '../types/request/User.request';
import { ICustomer } from '../types/document/ICustomer';
import { IStaff } from '../types/document/IStaff';
import { IRental } from '../types/document/IRental';
import { IPayment } from '../types/document/IPayment';
@Route('user')
@Tags('user')
export class UserController {
    constructor() { }

    @Post("/register")
    async SaveCustomer(@Body() getreq: ReqCustomer): Promise<ResCustomer> {
        const User: any = await new MainUser().saveCustomer(<ICustomer>(getreq));
        return <ResCustomer>User;
    }

    @Post("/staff")
    async SaveStaffData(@Body() getreq: ReqStaff): Promise<ResStaff> {
        const Staff: any = await new MainUser().saveStaff(<IStaff>(getreq));
        return <ResStaff>Staff;
    }

    @Post("/rental")
    async SaveRentalData(@Body() getreq: ReqRental): Promise<ResRental> {
        const rental: any = await new MainUser().saveRental(<IRental>(getreq));
        return <ResRental>rental;
    }

    @Post("/payment")
    async SavePaymentData(@Body() getreq: ReqPayment): Promise<ResPayment> {
        const payment: any = await new MainUser().savePayment(<IPayment>(getreq));
        return <ResPayment>payment;
    }

    @Post("/getSinglePayment")
    async GetPaymentData(@Body() getreq: GetPaymentById): Promise<ResPayment> {
        const paymentId: any = await new MainUser().GetPaymentById(getreq._id);
        return <ResPayment>paymentId;
    }

    @Get("/getAllPayment")
    async GetPaymentAll(): Promise<ResPayment> {
        const paymentId: any = await new MainUser().GetAllPayment();
        return <ResPayment>paymentId;
    }





}

// 612f597a14b3e21628787358 film
// 612f7f309254392dd43dc690 staff
// 612f710b67161936cc12f0f0  user
// 612f882cbbd19f10ec658911 rental