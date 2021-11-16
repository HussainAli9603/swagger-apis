import express from 'express';
import { UserController } from '../controller/User.controller';
import { ICustomer } from '../types/document/ICustomer';
import { ReqCustomer, ReqRental } from '../types/request/User.request';
import { StaffSchema } from '../model/staff.model';
import { ResCustomer, ResPayment, ResRental, ResStaff } from '../types/Response/User.response';
import CustomeError from '../utills/error';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';
import { checkJwtToken } from '../middleware/checkJwtToken';

export class UserRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.post('/register', async (req, res, next) => {
            try {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                const getreq: any = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash,
                    address: req.body.address,
                };
                const USer: ResCustomer = await new UserController().SaveCustomer(getreq);
                res.status(200).send({ Success: true, message: "User Register", Customer: USer });
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/staff', async (req, res, next) => {
            try {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                const getreq: any = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash,
                    address: req.body.address,
                    store: req.body.store,
                    picUrl: req.body.picUrl,
                };
                const Stafff: ResStaff = await new UserController().SaveStaffData(getreq);
                res.status(200).send({ Success: true, message: "Staff Register", Staff: Stafff });
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/rental', async (req, res, next) => {
            try {
                const getreq: any = req.body;
                const Rental: ResRental = await new UserController().SaveRentalData(getreq);
                res.status(200).send({ Success: true, message: "Rental Add", Staff: Rental });
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/payment', async (req, res, next) => {
            try {
                const getreq: any = req.body;
                const payment: ResPayment = await new UserController().SavePaymentData(getreq);
                const pushDate = await StaffSchema.findOneAndUpdate({ _id: payment.staffId, $push: { paymentId: payment._id } })
                res.status(200).send({ Success: true, message: "Payment Add", Payment: payment });
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/getSinglePayment', async (req, res, next) => {
            try {
                const getreq: any = req.body;
                const payment: ResPayment = await new UserController().GetPaymentData(getreq);
                res.status(200).send({ Success: true, message: "Get User Payment", Payment: payment });
            } catch (error) {
                next(error);
            }
        });

        this.router.get('/getAllPayment', async (req, res, next) => {
            try {
                const payment: ResPayment = await new UserController().GetPaymentAll();
                res.status(200).send({ Success: true, message: "Get All User Payment", Payment: payment });
            } catch (error) {
                next(error);
            }
        });






    }
}

export const USerRoutesApi = new UserRoutes().router;