export interface IBusRequest {
    bussName: string;
    bussSeats: number;
}

export interface IGetBuss {
    _id: string;
}

export interface IUpdateBussRequest {
    _id: string;
    bussName: string;
    bussSeats: number;
}

export interface IDeleteBuss {
    _id: string;
}