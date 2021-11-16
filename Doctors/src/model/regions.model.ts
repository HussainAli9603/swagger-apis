import { Schema, model, Mongoose } from 'mongoose';
import { IRegion } from '../types/document/IRegion';
const IRegionSchema = new Schema(
  {
    name: { type: String },
    nameKey: { type: String },
    code: { type: String },
    links:[{
      rel: "string",
      href: "string"
    }]
  },
  { timestamps: true }
);
export const RegionSchema = model<IRegion>('RegionSchema', IRegionSchema);