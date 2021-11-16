import { Meta, Problem, ProductDetail, Status } from './listalert.full.response'

export interface IListAlertGetDefaultResponse {
  meta: Meta
  items: ItemDefault[]
}

export interface ItemDefault {
  id: string
  alertURL: string
  created: Date
  modified: Date
  notation: string
  problem: Problem[]
  productDetails: ProductDetail[]
  reportingBusiness: ReportingBusiness
  shortTitle: string
  status: Status
  title: string
  type: string[]
}

export interface ReportingBusiness {
  commonName: string
}
