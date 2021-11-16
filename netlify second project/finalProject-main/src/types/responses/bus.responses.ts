export interface IBussResponse {
    _id: string;
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBookingRes[];
    createdAt?: Date | any;
    updatedAt?: Date | any
}
export interface BussBookingRes {
    startDate: string,
    endDate: string,
}


export interface IGetBussResponse {
    _id: string;
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBookingRes[];
    createdAt?: Date | any;
    updatedAt?: Date | any
}
export interface IUpdateBussResponse {
    _id: string;
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBookingRes[];
    createdAt?: Date | any;
    updatedAt?: Date | any
}
export interface IAllBussResponse {
    _id: string;
    bussName: string;
    bussSeats: string;
    bussBokingDates: BussBookingRes[];
    createdAt?: Date | any;
    updatedAt?: Date | any
}