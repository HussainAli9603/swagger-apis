import { Router } from 'express'
import { LIST_ALERT_THIS_URL } from '../constants/api.constants'
import { _VIEW } from '../constants/string.constants'
import { FoodAlertController } from '../controllers/foodalert.controller'
export class FoodAlertRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.configureRoutes()
  }

  configureRoutes() {
    // List Alerts
    this.router.get(LIST_ALERT_THIS_URL, async function (req, res, next) {
      let query: any = req.query
      const limit = req.query._limit!.toString()
      const view = req.query._view!.toString()
      try {
        const response = await new FoodAlertController().getListAlerts(
          limit,
          view == _VIEW.DEFAULT ? _VIEW.DEFAULT : _VIEW.FULL
        )
        res.send(response)
      } catch (e) {
        res.send(e)
      }
    })
  }
}

export const FoodAlertRouter = new FoodAlertRoutes().router
