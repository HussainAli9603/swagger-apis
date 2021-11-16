import { IBUSDOCUMENT } from '../types/documents/bus.document';
import { MainBus } from '../repositories/buss.repositories';
import { BussSchema } from '../models/bus.model';
import ErrorHandler from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request } from "tsoa";
import { IBussResponse, IGetBussResponse, IUpdateBussResponse, IAllBussResponse } from '../types/responses/bus.responses';
import { IBusRequest, IGetBuss, IUpdateBussRequest, IDeleteBuss } from '../types/requests/bus.request';


@Route('buss')
@Tags('buss')
export class BussController {
    constructor() { }

    /**
       * Add New Buss 
    */
    @Post('/addbuss')
    async saveBuss(@Body() buss: IBusRequest): Promise<IBussResponse> {
        const newBuss: any = await new MainBus().addBuss(<IBUSDOCUMENT><unknown>(buss));
        return <IBussResponse>(newBuss);
    }
    /**
       * Get SingleBuss 
    */
    @Post("/getbuss")
    async getBuss(@Body() getreq: IGetBuss): Promise<IGetBussResponse> {
        const buss: any = await new MainBus().getBuss(getreq._id);
        return <IGetBussResponse>buss;
    }
    /**
        *Update Buss 
    */
    @Put('/updatebuss')
    async updateBuss(@Body() doctor: IUpdateBussRequest): Promise<IUpdateBussResponse> {
        const update_doctor: any = await new MainBus().updateBuss(<IBUSDOCUMENT><unknown>(doctor));
        if (update_doctor === null)
            throw new ErrorHandler(400, 'Buss not updated');
        return <IUpdateBussResponse>update_doctor;
    }
    /**
       *Delete Buss 
    */
    @Delete('/deletebuss')
    @SuccessResponse("200", "Buss deleted")
    async deletBuss(@Body() delreq: IDeleteBuss) {
        return await new MainBus().deleteBuss(delreq._id);
    }

    /**
    *Get All Busses 
    */
    @Get('/getallbuss')
    async getAllBuss(): Promise<IAllBussResponse[]> {
        const doctor: IBUSDOCUMENT[] = await new MainBus().getAllBuss();
        return <IAllBussResponse[]><unknown>(doctor);
    }







}
