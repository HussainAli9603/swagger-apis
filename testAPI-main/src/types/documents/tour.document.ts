import { Document } from "mongoose";
export interface ITOURDOCUMENT extends Document {
    _id: string;
    TourDestinations: Array<string>;
    TourDate: Date;
    TourParticipants: number;
    TourRegistrarPhone: string;
    TourRegistrarName: string;
    BussesAlloted: Array<string>
}