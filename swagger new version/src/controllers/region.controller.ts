import {
  Controller,
  Example,
  Get,
  Path,
  Post,
  Route,
  Tags,
} from '@tsoa/runtime'
import { RegionRepository } from '../repositories/region.repository'
import { IRegionDetailPaginationGetResponse } from '../types/responses/regiondetailpagination.response'

@Route('v1/regions')
export class RegionController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all regions, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns IRegionDetailPaginationGetResponse
   */
  @Example({
    regions: [
      {
        id: 1,
        name: 'sample string 2',
        nameKey: 'sample string 3',
        code: 'sample string 4',
        links: [
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
        ],
      },
      {
        id: 1,
        name: 'sample string 2',
        nameKey: 'sample string 3',
        code: 'sample string 4',
        links: [
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
        ],
      },
      {
        id: 1,
        name: 'sample string 2',
        nameKey: 'sample string 3',
        code: 'sample string 4',
        links: [
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
          {
            rel: 'sample string 1',
            href: 'sample string 2',
          },
        ],
      },
    ],
    meta: {
      dataSource: 'sample string 1',
      extractDate: '2021-09-13T18:42:32.6249303+01:00',
      itemCount: 3,
      returncode: 'sample string 4',
      totalCount: 5,
      totalPages: 6,
      pageSize: 7,
      pageNumber: 8,
    },
    links: [
      {
        rel: 'sample string 1',
        href: 'sample string 2',
      },
      {
        rel: 'sample string 1',
        href: 'sample string 2',
      },
      {
        rel: 'sample string 1',
        href: 'sample string 2',
      },
    ],
  })
  @Tags('Regions')
  @Get('/{pageNumber}/{pageSize}')
  async getRegionDetailPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IRegionDetailPaginationGetResponse> {
    const response: IRegionDetailPaginationGetResponse =
      await new RegionRepository().getRegionDetailPagination(
        pageNumber,
        pageSize
      )

    return response
  }
}
