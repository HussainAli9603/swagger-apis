import { TourSchema } from '../models/tour.model';
import { BussSchema } from '../models/bus.model';
import { ITOURDOCUMENT } from '../types/documents/tour.document'

export class MainTour {
    constructor() { }

    // saving the tour into the database
    async saveTour(addTour: any, allottedBusses: any) {
        addTour['BusAlloted'] = <any>allottedBusses;
        for (var i = 0; i < allottedBusses.length; i++) {
            console.log({ allottedBusses })
            var buss = await BussSchema.findById(<any>allottedBusses[i]);
            buss?.bussBookingDates.push(new Date(addTour.tourBookingDate))
            await buss?.save()
        }
        return (await new TourSchema(addTour).save()).populate('busId')
    }
}