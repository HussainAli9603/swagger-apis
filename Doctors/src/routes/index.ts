import express from 'express';
import { DoctorRoutesApi } from "./Doctor.Routes";
import { PatientRoutesApi } from "./Patient.Routes";
import { RegionRoutesApi } from "./Region.Routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/doctor',DoctorRoutesApi);
        this.router.use('/patient',PatientRoutesApi);
        this.router.use('/region',RegionRoutesApi);

    }


}
export const MainApi = new MainRouter().router;