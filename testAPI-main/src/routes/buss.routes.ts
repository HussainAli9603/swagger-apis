import express from 'express';
import { BussController } from '../controller/bus.controller';
import { IBusRequest, IGetBuss, IUpdateBussRequest, IDeleteBuss } from '../types/requests/bus.request';
import { IBussResponse, IGetBussResponse, IUpdateBussResponse, IAllBussResponse } from '../types/responses/bus.responses';

export class BussRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {

        //Adding Buss Route
        this.router.post('/addbuss', async (req: any, res, next) => {
            try {
                var buss = await new BussController().saveBuss(req.body);
                res.status(200).json({ addbuss: buss }).end()
            } catch (error) {
                next(error);
            }
        });

        //Get single Buss Route
        this.router.post('/getbuss', async (req, res, next) => {
            try {
                const getreq: IGetBuss = req.body;
                const busss: any = await new BussController().getBuss(getreq);
                res.send({ getbuss: busss });
            } catch (error) {
                next(error);
            }
        });

        //Update Buss Route
        this.router.put('/updatebuss', async (req, res, next) => {
            try {
                const doctor: IUpdateBussRequest = req.body;
                const upadatedBuss: IUpdateBussResponse = await new BussController().updateBuss(doctor);
                const response = { upadatedBuss };
                res.status(200).json({ updatebuss: response });
            } catch (error) {
                next(error);
            }
        });

        //Delete Buss Route
        this.router.delete('/deletebuss', async (req: any, res, next) => {
            try {
                const delreq: IDeleteBuss = req.body;
                const DeletedBuss = await new BussController().deletBuss(delreq);
                res.status(200).json({ message: 'Delete Buss' });
            } catch (error) {
                next(error);
            }
        });

        //Get All Busses Route
        this.router.get('/getallbuss', async (req: any, res, next) => {
            try {
                const BussList: IAllBussResponse[] = await new BussController().getAllBuss();
                res.status(200).json({ allbusses: BussList });
            } catch (error) {
                next(error);
            }
        });


    }


}
export const BussRoutesApi = new BussRoutes().router;