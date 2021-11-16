import { Document } from 'mongoose';
export interface IFilm extends Document {
    _id: string;
    title: string;
    description: string;
    language: string;
    release_year: string;
    rental_duration: string;
    rental_rate: string;
    length: string;
    replacement_cost: string;
    actor: string[];
    createdAt?: string;
    updatedAt?: string;
}
export interface ActorDataa {
    _id: string[]
}