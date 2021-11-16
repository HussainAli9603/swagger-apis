import { _SPLIT_ATTHERATE, _VIEW } from '../constants/string.constants'
import { FoodAlertService } from '../services/foolalert/foodalert.service'
import { IListAlertGetDefaultResponse } from '../types/responses/listalert.default.response'
import { IListAlertGetFullResponse } from '../types/responses/listalert.full.response'

export class FoodAlertRepository {
  constructor() {}

  async getListAlerts(
    params: any
  ): Promise<IListAlertGetFullResponse | IListAlertGetDefaultResponse> {
    let response = await new FoodAlertService().getListAlerts(params)
    if (params._view == _VIEW.FULL) {
      let data = response.data
      data = JSON.stringify(data)
      data = data.split(_SPLIT_ATTHERATE).join()
      let decodedResponse: IListAlertGetFullResponse = JSON.parse(data)
      return <IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
        decodedResponse
      )
    } else if (params._view == _VIEW.DEFAULT) {
      let data = response.data
      data = JSON.stringify(data)
      data = data.split(_SPLIT_ATTHERATE).join()
      let decodedResponse: IListAlertGetDefaultResponse = JSON.parse(data)
      return <IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
        decodedResponse
      )
    }

    return <IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
      response.data
    )
  }
}
