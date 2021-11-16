import { Document } from 'mongoose';
export interface IMetaData extends Document {
    _id:string;
    dataSource: string;
    extractDate: string;
    itemCount: string;
    returncode: string;
    totalCount: string;
    totalPages: string;
    pageSize:string;
    pageNumber:string;
    links:Links22[];
}
export interface Links22{
    rel:string,
    href:string,
}
