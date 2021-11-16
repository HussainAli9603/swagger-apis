import { CUSTOM_HEADER_IMG_CSS } from '../constants/css.constants'
import { ORCALO_FACICON_PATH } from '../constants/resource.constants'
import {
  ORCALO_TITLE,
  SWAGGER_API_VERSION_URLS,
} from '../constants/swagger.constants'

/***************************      Swagger Ui Options      *****************************************/
export const SWAGGER_UI_OPTIONS = {
  customCss: CUSTOM_HEADER_IMG_CSS,
  customSiteTitle: ORCALO_TITLE,
  customfavIcon: ORCALO_FACICON_PATH,
  explorer: true,
  swaggerOptions: {
    // Urls For The API Versions
    urls: SWAGGER_API_VERSION_URLS,
  },
}
