export interface IListAlertGetFullResponse {
  meta: Meta
  items: ItemFull[]
}

export interface ItemFull {
  id: string
  smStext: string
  actionTaken: string
  alertURL: string
  consumerAdvice: string
  created: Date
  description: string
  modified: Date
  notation: string
  problem: Problem[]
  productDetails: ProductDetail[]
  relatedMedia?: string[]
  reportingBusiness: Business
  shortTitle: string
  shortURL: string
  status: Status
  title: string
  twitterText: string
  type: string[]
  otherBusiness?: Business[] | Business
}

export interface Business {
  commonName: string
}

export interface Problem {
  id: string
  allergen?: Allergen[]
  riskStatement: string
}

export interface Allergen {
  id: string
  altLabel?: string
  label: string
  narrower?: string[]
  notation: string
  riskStatement: string
  broader?: string
}

export interface ProductDetail {
  id: string
  batchDescription: BatchDescription[]
  packSizeDescription?: string
  productName: string
}

export interface BatchDescription {
  id: string
  batchCode?: string
  bestBeforeDate?: Date
  bestBeforeDescription?: string
  useByDescription?: string
  lotNumber?: string
}

export interface Status {
  id: string
  label: Label
}

export enum Label {
  Published = 'Published',
}

export interface Meta {
  publisher: string
  licence: string
  documentation: string
  version: string
  comment: string
  hasFormat: string[]
  limit: number
}
