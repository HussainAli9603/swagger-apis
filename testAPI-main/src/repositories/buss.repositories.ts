import { IBUSDOCUMENT } from '../types/documents/bus.document'
import { BussSchema } from '../models/bus.model';

export class MainBus {
    constructor() { }

    /**
    *Add new Buss 
    */
    addBuss(Buss: IBUSDOCUMENT) {
        return new BussSchema(Buss).save();
    }
    /**
    *Get single Buss 
    */
    getBuss(_id: string) {
        return BussSchema.findById(_id);
    }

    /**
    *Get All Busses 
    */
    getAllBuss() {
        return BussSchema.find();
    }

    /**
    *Delete Buss 
    */
    deleteBuss(id: string) {
        return BussSchema.findByIdAndDelete(id);
    }

    /**
    *Update Buss 
    */
    updateBuss(Buss: IBUSDOCUMENT) {
        return BussSchema.findByIdAndUpdate(Buss._id, Buss, {
            new: true
        });
    }

    async GetPresentBussesByDate(date: Date) {
        function FilterAvailable(elem: any, index: number, array: any) {
            return elem.bussBookingDates.indexOf(date.toString()) == -1
        }
        var available_busses = [];
        var all_busses = await BussSchema.find();
        available_busses = all_busses;
        console.log({ available_busses })
        available_busses = all_busses.filter(FilterAvailable);

        return available_busses;
    }


}