import { Schema, model, Mongoose } from 'mongoose';
import { IMetaData } from '../types/document/IMetaData';
const IMetaSchema = new Schema(
  {
    dataSource: { type: String },
    extractDate: { type: Number },
    itemCount: { type: Number },
    returncode: { type: Number },
    totalCount: { type: Number },
    totalPages: { type: Number },
    pageSize: { type: Number },
    pageNumber: { type: Number },
    links:[{
      rel: "string",
      href: "string"
    }]
  },
  
);
export const MetaSchema = model<IMetaData>('MetaSchema', IMetaSchema);
