import {
  Controller,
  Example,
  Get,
  Query,
  Response,
  Route,
  Tags,
} from '@tsoa/runtime'
import { _VIEW } from '../constants/string.constants'
import { FoodAlertRepository } from '../repositories/foodalert.repository'
import { IListAlertGetDefaultResponse } from '../types/responses/listalert.default.response'
import { IListAlertGetFullResponse } from '../types/responses/listalert.full.response'

@Route('v1/foodalerts')
@Tags('Food Alerts')
export class FoodAlertController extends Controller {
  constructor() {
    super()
  }

  /**
   * @param _limit Must be greater than <b>0</b>
   * @param _view Must be <b>"default"</b> or <b>"full"</b>
   * @summary List Alerts | List alerts changed since some point in time | Search for alerts matching some search term
   */
  @Example({
    meta: {
      publisher: 'string',
      licence: 'string',
      documentation: 'string',
      version: 'string',
      comment: 'string',
      hasFormat: ['string'],
      limit: 0,
    },
    items: [
      {
        id: 'string',
        smStext: 'string',
        actionTaken: 'string',
        alertURL: 'string',
        consumerAdvice: 'string',
        created: '2021-09-13T13:22:53.195Z',
        description: 'string',
        modified: '2021-09-13T13:22:53.195Z',
        notation: 'string',
        problem: [
          {
            id: 'string',
            allergen: [
              {
                id: 'string',
                altLabel: 'string',
                label: 'string',
                narrower: ['string'],
                notation: 'string',
                riskStatement: 'string',
                broader: 'string',
              },
            ],
            riskStatement: 'string',
          },
        ],
        productDetails: [
          {
            id: 'string',
            batchDescription: [
              {
                id: 'string',
                batchCode: 'string',
                bestBeforeDate: '2021-09-13T13:22:53.195Z',
                bestBeforeDescription: 'string',
                useByDescription: 'string',
                lotNumber: 'string',
              },
            ],
            packSizeDescription: 'string',
            productName: 'string',
          },
        ],
        relatedMedia: ['string'],
        reportingBusiness: {
          commonName: 'string',
        },
        shortTitle: 'string',
        shortURL: 'string',
        status: {
          id: 'string',
          label: 'Published',
        },
        title: 'string',
        twitterText: 'string',
        type: ['string'],
        otherBusiness: [
          {
            commonName: 'string',
          },
        ],
      },
    ],
  })
  @Example({
    meta: {
      publisher: 'string',
      licence: 'string',
      documentation: 'string',
      version: 'string',
      comment: 'string',
      hasFormat: ['string'],
      limit: 0,
    },
    items: [
      {
        id: 'string',
        actionTaken: 'string',
        alertURL: 'string',
        consumerAdvice: 'string',
        created: '2021-09-13T13:22:53.195Z',
        description: 'string',
        modified: '2021-09-13T13:22:53.195Z',
        notation: 'string',
        problem: [
          {
            id: 'string',
            allergen: [
              {
                id: 'string',
                altLabel: 'string',
                label: 'string',
                narrower: ['string'],
                notation: 'string',
                riskStatement: 'string',
                broader: 'string',
              },
            ],
            riskStatement: 'string',
          },
        ],
        productDetails: [
          {
            id: 'string',
            batchDescription: [
              {
                id: 'string',
                batchCode: 'string',
                bestBeforeDate: '2021-09-13T13:22:53.195Z',
                bestBeforeDescription: 'string',
                useByDescription: 'string',
                lotNumber: 'string',
              },
            ],
            packSizeDescription: 'string',
            productName: 'string',
          },
        ],
        relatedMedia: ['string'],
        reportingBusiness: {
          commonName: 'string',
        },
        shortTitle: 'string',
        shortURL: 'string',
        status: {
          id: 'string',
          label: 'Published',
        },
        title: 'string',
        twitterText: 'string',
        type: ['string'],
        otherBusiness: [
          {
            commonName: 'string',
          },
        ],
      },
    ],
  })
  @Get('/id')
  @Response<IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
    '200',
    'Success'
  )
  async getListAlerts(
    @Query() _limit?: string,
    @Query() _view?: _VIEW,
    @Query() since?: string
  ): Promise<IListAlertGetFullResponse | IListAlertGetDefaultResponse> {
    let params: { [k: string]: any } = {}
    _limit == undefined ? undefined : (params._limit = _limit)
    _view == undefined ? undefined : (params._view = _view)
    since == undefined ? undefined : (params.since = since)
    const response: IListAlertGetFullResponse | IListAlertGetDefaultResponse =
      await new FoodAlertRepository().getListAlerts(params)
    return response
  }
}
