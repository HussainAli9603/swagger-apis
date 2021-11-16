import express from 'express';
import { AdminRoutesApi } from "./Admin.Routes";
import { USerRoutesApi } from "./User.Routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/admin', AdminRoutesApi);
        this.router.use('/User', USerRoutesApi);

    }


}
export const MainApi = new MainRouter().router;