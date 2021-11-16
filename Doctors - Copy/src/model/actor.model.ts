import { Schema, model, Mongoose } from 'mongoose';
import { IActor } from '../types/document/IActor';
const IActorSchema = new Schema(
    {
        name: { type: String },
    },
    { timestamps: true }
);
export const ActorSchema = model<IActor>('ActorSchema', IActorSchema);