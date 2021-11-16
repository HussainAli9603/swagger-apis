import { API_VERSION_1 } from './string.constants'

/***************************      Target API Food Alert     *****************************************/
// Base URL
const BASE_URL_FOOD_ALERT_TARGET = 'https://data.food.gov.uk/food-alerts'

// List Alert Url
export const LIST_ALERTS_URL_TARGET = BASE_URL_FOOD_ALERT_TARGET + '/id'

/***************************      Target API Food Hygiene Ratings Scheme     *****************************************/
export const BASE_URL_FOOD_HYGIENE_RATING_SCHEME =
  'https://api.ratings.food.gov.uk/'

// Region Detail With Pagination
export const REGION_DETAIL_WITH_PAGINATION_URL_TARGET =
  BASE_URL_FOOD_HYGIENE_RATING_SCHEME + 'regions/:pageNumber/:pageSize'

/***************************      Our API Food Alert     *****************************************/
export const BASE_URL_FOOD_ALERTS_THIS: string = `/${API_VERSION_1}/foodalerts`

// List Alert Url
export const LIST_ALERT_THIS_URL: string = '/id'

/***************************      Our API Food Hygiene Rating     *****************************************/
// Base Url
export const BASE_URL_FOOD_HYGIENE_RATING_THIS = `/${API_VERSION_1}/regions`

// Regions/{pageNumber}/{pageSize}
export const REGION_DETAIL_WITH_PAGINATION_URL_THIS = '/:pageNumber/:pageSize'
