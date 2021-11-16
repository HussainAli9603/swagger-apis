import { RegionService } from '../services/foodhygieneratings/region.service'
import { IRegionDetailPaginationGetResponse } from '../types/responses/regiondetailpagination.response'

export class RegionRepository {
  constructor() {}

  async getRegionDetailPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IRegionDetailPaginationGetResponse> {
    const response = await new RegionService().getRegionDetailPagination(
      pageNumber,
      pageSize
    )
    const decodedResponse: IRegionDetailPaginationGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }
}
