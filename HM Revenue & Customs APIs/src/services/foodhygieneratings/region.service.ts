import axios from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class RegionService {
  constructor() {}

  async getRegionDetailPagination(pageNumber: string, pageSize: string) {
    const response = await axios.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/regions/${pageNumber}/${pageSize}`,
      {
        headers: {
          'x-api-version': '2',
          accept: 'application/json',
        },
      }
    )

    return response
  }
}
