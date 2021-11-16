import axios from 'axios'
import { LIST_ALERTS_URL_TARGET } from '../../constants/api.constants'

export class FoodAlertService {
  constructor() {}

  async getListAlerts(param: any) {
    const response = await axios.get(LIST_ALERTS_URL_TARGET, { params: param })
    return response
  }
}
