import express from 'express';
import { BussRoutesApi } from './buss.routes';
import { TourRoutesApi } from './tour.routes';

export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {

        //using BussRoutesApi from BussRoutes
        this.router.use('/buss', BussRoutesApi);

        //using TourRoutesApi from TourRoutes
        this.router.use('/tour', TourRoutesApi);
    }


}
//Export MainApi to use in main index file
export const MainApi = new MainRouter().router;