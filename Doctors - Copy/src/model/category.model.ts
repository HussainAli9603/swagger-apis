import { Schema, model, Mongoose } from 'mongoose';
import { ICategory } from '../types/document/ICategory';
const ICategorySchema = new Schema(
    {
        title: { type: String },
    },
    { timestamps: true }
);
export const CategorySchema = model<ICategory>('CategorySchema', ICategorySchema);