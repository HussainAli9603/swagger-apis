import express from 'express';
import { AdminController } from '../controller/Admin.controller';
import { IAdmin } from '../types/document/IAdmin';
import { Actors, Category, RegisterReqAdmin, UpdateReqFilm } from '../types/request/Admin.request';
import { ResActor, ResCategory, SaveUpdateResAdmin, SaveUpdateResFilm } from '../types/Response/Admin.response';
import CustomeError from '../utills/error';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';
import { checkJwtToken } from '../middleware/checkJwtToken';

export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/register', async (req, res, next) => {
      try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const getreq: RegisterReqAdmin = {
          name: req.body.name,
          email: req.body.email,
          password: hash,
        }
        const Admin: SaveUpdateResAdmin = await new AdminController().SaveAdmin(getreq);
        res.status(200).send({ Success: true, message: "Admin Register", admin: Admin });
      } catch (error) {
        next(error);
      }
    });

    this.router.post('/category', async (req, res, next) => {
      try {
        const getreq: Category = req.body;
        const Category: ResCategory = await new AdminController().SaveCategory(getreq);
        console.log(Category)
        res.status(200).send({ Success: true, message: "Category Save", Category: Category });
      } catch (error) {
        next(error);
      }
    });

    this.router.post('/actor', async (req, res, next) => {
      try {
        const getreq: Actors = req.body;
        const Actor: ResActor = await new AdminController().SaveActor(getreq);
        res.status(200).send({ Success: true, message: "Actor Save", Actor: Actor });
      } catch (error) {
        next(error);
      }
    });

    this.router.post('/film', async (req, res, next) => {
      try {
        const getreq: UpdateReqFilm = req.body;
        const Film: SaveUpdateResFilm = await new AdminController().SaveFilm(getreq);
        res.status(200).send({ Success: true, message: "Film Save", Film: Film });
      } catch (error) {
        next(error);
      }
    });





  }
}
export const AdminRoutesApi = new AdminRoutes().router;

