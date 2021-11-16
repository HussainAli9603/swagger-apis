import { IAdmin } from '../types/document/IAdmin';
import { ICategory } from '../types/document/ICategory';
import { IFilm } from '../types/document/IFilm';
import { MainAdmin } from '../repositories/Admin.repositorie';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request } from "tsoa";
import { SaveUpdateResAdmin, ResCategory, ResActor, SaveUpdateResFilm } from '../types/response/Admin.response';
import { RegisterReqAdmin, Category, Actors, UpdateReqFilm } from '../types/request/Admin.request';
import { IActor } from '../types/document/IActor';
@Route('admin')
@Tags('admin')
export class AdminController {
  constructor() { }

  @Post("/register")
  async SaveAdmin(@Body() getreq: RegisterReqAdmin): Promise<SaveUpdateResAdmin> {
    const admin: any = await new MainAdmin().registerAdmin(<IAdmin>(getreq));
    return <SaveUpdateResAdmin>admin;
  }

  @Post("/category")
  async SaveCategory(@Body() getreq: Category): Promise<ResCategory> {
    const category: any = await new MainAdmin().saveCategory(<ICategory>(getreq));
    return <ResCategory>category;
  }

  @Post("/actor")
  async SaveActor(@Body() getreq: Actors): Promise<ResActor> {
    const actor: any = await new MainAdmin().saveActor(<IActor>(getreq));
    return <ResActor>actor;
  }

  @Post("/film")
  async SaveFilm(@Body() getreq: UpdateReqFilm): Promise<SaveUpdateResFilm> {
    const film: any = await new MainAdmin().saveFilm(<IFilm>(getreq));
    return <SaveUpdateResFilm>film;
  }





}

