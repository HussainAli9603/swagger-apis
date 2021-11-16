import express from 'express';
import { TourController } from '../controller/tour.controller';
import { ITourResponse } from '../types/responses/tour.responses';
import { ITourRequest } from '../types/requests/tour.request';


export class TourRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        // Register new tour
        this.router.post('/addtour', async (req, res, next) => {
            try {
                var tour = await new TourController().saveTour(req.body);
                console.log({ tour })
                res.status(200).json({ TourDetails: tour }
                ).end()
            } catch (error) {
                next(error);
            }
        });
    }
}

export const TourRoutesApi = new TourRoutes().router;