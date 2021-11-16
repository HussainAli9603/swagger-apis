import { Router } from 'express'
import {
  BASE_URL_FOOD_ALERTS_THIS,
  BASE_URL_FOOD_HYGIENE_RATING_THIS,
} from '../constants/api.constants'
import { FoodAlertRouter } from './footalert.routes'
import { RegionRouter } from './region.routes'

export class IndexRoute {
  router: Router

  constructor() {
    this.router = Router()
    this.setRoutes()
  }

  setRoutes() {
    // Default Route
    this.router.get('/', function (req, res, next) {
      res.redirect('/api-docs')
    })

    // Food Alert Route
    this.router.use(BASE_URL_FOOD_ALERTS_THIS, FoodAlertRouter)

    // Food Hygiene Rating Route
    this.router.use(BASE_URL_FOOD_HYGIENE_RATING_THIS, RegionRouter)
  }
}

export const MainRouter = new IndexRoute().router
