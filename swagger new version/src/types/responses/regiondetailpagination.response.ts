export interface IRegionDetailPaginationGetResponse {
  regions: Region[]
  meta: MetaRegion
  links: Link[]
}

export interface Link {
  rel: string
  href: string
}

export interface MetaRegion {
  dataSource: string
  extractDate: Date
  itemCount: number
  returncode: string
  totalCount: number
  totalPages: number
  pageSize: number
  pageNumber: number
}

export interface Region {
  id: number
  name: string
  nameKey: string
  code: string
  links: Link[]
}
