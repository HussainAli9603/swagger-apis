export interface IBusRequest {
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBookingReq[];
}

export interface BussBookingReq {
    startDate: "YYYY-MM-DD",
    endDate: "YYYY-MM-DD",
}

export interface IGetBuss {
    _id: string;
}

export interface IUpdateBussRequest {
    _id: string;
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBookingReq[];
}

export interface IDeleteBuss {
    _id: string;
}