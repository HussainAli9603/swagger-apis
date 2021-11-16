import { Router } from 'express'
import { REGION_DETAIL_WITH_PAGINATION_URL_THIS } from '../constants/api.constants'
import { RegionController } from '../controllers/region.controller'

export class RegionRoutes {
  router: Router
  constructor() {
    this.router = Router()
    this.configureRoutes()
  }

  configureRoutes() {
    this.router.get(
      REGION_DETAIL_WITH_PAGINATION_URL_THIS,
      async function (req, res, next) {
        const pageNumber = req.params.pageNumber
        const pageSize = req.params.pageSize
        try {
          const response =
            await new RegionController().getRegionDetailPagination(
              pageNumber,
              pageSize
            )
          res.send(response)
        } catch (e) {
          console.log(e)
        }
      }
    )
  }
}

export const RegionRouter = new RegionRoutes().router
