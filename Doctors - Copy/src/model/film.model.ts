import { Schema, model, Mongoose } from 'mongoose';
import { IFilm } from '../types/document/IFilm';
import { ActorSchema } from './actor.model';
const IFilmSchema = new Schema(
    {
        title: { type: String },
        description: { type: String },
        language: { type: String },
        release_year: { type: String },
        rental_duration: { type: String },
        rental_rate: { type: String },
        length: { type: String },
        replacement_cost: { type: String },
        actor: [{ type: Schema.Types.ObjectId, ref: "ActorSchema" }]



    },
    { timestamps: true }
);
export const FilmSchema = model<IFilm>('FilmSchema', IFilmSchema);