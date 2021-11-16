import { ITOURDOCUMENT } from '../types/documents/tour.document';
import { MainTour } from '../repositories/tour.repositories';
import { MainBus } from '../repositories/buss.repositories';
import ErrorHandler from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request } from "tsoa";
import { ITourResponse } from '../types/responses/tour.responses';
import { ITourRequest } from '../types/requests/tour.request';



@Route('tour')
@Tags('tour')
export class TourController {
    constructor() { }

    @Post('/addtour')
    @SuccessResponse(200, 'Tour registered successfully')
    async saveTour(@Body() tours: ITourRequest): Promise<any> {
        var date: any;
        date = new Date(tours.Date);

        if (date.toString() != 'Invalid Date') {
            var available_busses = await new MainBus().GetPresentBussesByDate(date);
            var alloted_busses = this.AllotBusses(available_busses, tours.Participants);
            console.log(alloted_busses);

            const registeredTour: any = await new MainTour().saveTour(tours);
            if (!registeredTour)
                throw new ErrorHandler(400, 'Cannot register tour');
            return <ITourResponse>registeredTour;
        }
        else
            throw new ErrorHandler(400, 'Cannot register tour. Invalid TourDate entered')
    }


    private AllotBusses(available_busses: Array<any>, tour_participants: number) {
        if (available_busses.length == 0)
            throw new ErrorHandler(404, 'No available busses for your requested tour');

        let buss_subset = this.GenerateBussesSubsets(available_busses, available_busses.length);
        let mapped_subsets = this.MapTotalSubsetCapacity(buss_subset).sort(function (a: any, b: any) {
            return b.total_capacity - a.total_capacity;
        });

        while (mapped_subsets.length > 0) {
            let curr_subset = mapped_subsets.pop();
            if (curr_subset) {
                if (curr_subset.total_capacity >= tour_participants)
                    return curr_subset;
            }
        }
        throw new ErrorHandler(400, 'We currently donot have enough busses to accomodate your tour');
    }

    GenerateBussesSubsets(available_busses: Array<any>, total_busses: number) {
        var all_subsets = [];

        for (var i = 0; i < (Math.pow(2, total_busses)); i++) {
            var subset = [];

            for (var j = 0; j < total_busses; j++) {
                if (i & (1 << j)) {
                    subset.push(available_busses[j]);
                }
            }

            if (subset.length > 0)
                all_subsets.push(subset);
        }

        return all_subsets;
    }

    MapTotalSubsetCapacity(subsets: any) {
        var mapped_subsets = [];
        for (var i = 0; i < subsets.length; i++) {
            let total_capacity = 0;
            for (var j = 0; j < subsets[i].length; j++) {
                total_capacity += subsets[i][j].BussSeats;
            }
            mapped_subsets.push({
                Busses: subsets[i],
                total_capacity: total_capacity
            });
        }
        return mapped_subsets;
    }
}
