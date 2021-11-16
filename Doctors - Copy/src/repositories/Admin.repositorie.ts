import { AdminSchema } from '../model/admin.model';
import { CategorySchema } from '../model/category.model';
import { ActorSchema } from '../model/actor.model';
import { FilmSchema } from '../model/film.model';
import { IActor } from '../types/document/IActor';
import { IAdmin } from '../types/document/IAdmin';
import { ICategory } from '../types/document/ICategory';
import { IFilm } from '../types/document/IFilm';
export class MainAdmin {
  constructor() { }

  registerAdmin(Admin: IAdmin) {
    return new AdminSchema(Admin).save();
  }
  saveCategory(title: ICategory) {
    return new CategorySchema(title).save();
  }
  saveActor(name: IActor) {
    return new ActorSchema(name).save();
  }
  saveFilm(film: IFilm) {
    return new FilmSchema(film).save();
  }




}