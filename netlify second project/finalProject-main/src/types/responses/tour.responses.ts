// Register Tour response
export interface ITourResponse {
    TourDestinations: Array<string>;
    TourDate: Date;
    TourParticipants: number;
    BussesAlloted: Array<ISingleBUSS>
}

/**
 * Single Bus interface 
 * Used when populating Tour Alloted busses
 */
interface ISingleBUSS {
    _id: string;
    BussName: string;
    BussSeats: number;
}
