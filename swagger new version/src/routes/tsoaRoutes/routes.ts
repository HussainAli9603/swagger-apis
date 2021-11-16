/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FoodAlertController } from './../../controllers/foodalert.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RegionController } from './../../controllers/region.controller';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Meta": {
        "dataType": "refObject",
        "properties": {
            "publisher": {"dataType":"string","required":true},
            "licence": {"dataType":"string","required":true},
            "documentation": {"dataType":"string","required":true},
            "version": {"dataType":"string","required":true},
            "comment": {"dataType":"string","required":true},
            "hasFormat": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "limit": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Allergen": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "altLabel": {"dataType":"string"},
            "label": {"dataType":"string","required":true},
            "narrower": {"dataType":"array","array":{"dataType":"string"}},
            "notation": {"dataType":"string","required":true},
            "riskStatement": {"dataType":"string","required":true},
            "broader": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Problem": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "allergen": {"dataType":"array","array":{"dataType":"refObject","ref":"Allergen"}},
            "riskStatement": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BatchDescription": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "batchCode": {"dataType":"string"},
            "bestBeforeDate": {"dataType":"datetime"},
            "bestBeforeDescription": {"dataType":"string"},
            "useByDescription": {"dataType":"string"},
            "lotNumber": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProductDetail": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "batchDescription": {"dataType":"array","array":{"dataType":"refObject","ref":"BatchDescription"},"required":true},
            "packSizeDescription": {"dataType":"string"},
            "productName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Business": {
        "dataType": "refObject",
        "properties": {
            "commonName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Label": {
        "dataType": "refEnum",
        "enums": ["Published"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Status": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "label": {"ref":"Label","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemFull": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "smStext": {"dataType":"string","required":true},
            "actionTaken": {"dataType":"string","required":true},
            "alertURL": {"dataType":"string","required":true},
            "consumerAdvice": {"dataType":"string","required":true},
            "created": {"dataType":"datetime","required":true},
            "description": {"dataType":"string","required":true},
            "modified": {"dataType":"datetime","required":true},
            "notation": {"dataType":"string","required":true},
            "problem": {"dataType":"array","array":{"dataType":"refObject","ref":"Problem"},"required":true},
            "productDetails": {"dataType":"array","array":{"dataType":"refObject","ref":"ProductDetail"},"required":true},
            "relatedMedia": {"dataType":"array","array":{"dataType":"string"}},
            "reportingBusiness": {"ref":"Business","required":true},
            "shortTitle": {"dataType":"string","required":true},
            "shortURL": {"dataType":"string","required":true},
            "status": {"ref":"Status","required":true},
            "title": {"dataType":"string","required":true},
            "twitterText": {"dataType":"string","required":true},
            "type": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "otherBusiness": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"refObject","ref":"Business"}},{"ref":"Business"}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IListAlertGetFullResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemFull"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReportingBusiness": {
        "dataType": "refObject",
        "properties": {
            "commonName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemDefault": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "alertURL": {"dataType":"string","required":true},
            "created": {"dataType":"datetime","required":true},
            "modified": {"dataType":"datetime","required":true},
            "notation": {"dataType":"string","required":true},
            "problem": {"dataType":"array","array":{"dataType":"refObject","ref":"Problem"},"required":true},
            "productDetails": {"dataType":"array","array":{"dataType":"refObject","ref":"ProductDetail"},"required":true},
            "reportingBusiness": {"ref":"ReportingBusiness","required":true},
            "shortTitle": {"dataType":"string","required":true},
            "status": {"ref":"Status","required":true},
            "title": {"dataType":"string","required":true},
            "type": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IListAlertGetDefaultResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemDefault"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_VIEW": {
        "dataType": "refEnum",
        "enums": ["default","full"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Link": {
        "dataType": "refObject",
        "properties": {
            "rel": {"dataType":"string","required":true},
            "href": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Region": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "nameKey": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MetaRegion": {
        "dataType": "refObject",
        "properties": {
            "dataSource": {"dataType":"string","required":true},
            "extractDate": {"dataType":"datetime","required":true},
            "itemCount": {"dataType":"double","required":true},
            "returncode": {"dataType":"string","required":true},
            "totalCount": {"dataType":"double","required":true},
            "totalPages": {"dataType":"double","required":true},
            "pageSize": {"dataType":"double","required":true},
            "pageNumber": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegionDetailPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "regions": {"dataType":"array","array":{"dataType":"refObject","ref":"Region"},"required":true},
            "meta": {"ref":"MetaRegion","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/v1/foodalerts/id',

            function FoodAlertController_getListAlerts(request: any, response: any, next: any) {
            const args = {
                    _limit: {"in":"query","name":"_limit","dataType":"string"},
                    _view: {"in":"query","name":"_view","ref":"_VIEW"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getListAlerts.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/regions/:pageNumber/:pageSize',

            function RegionController_getRegionDetailPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RegionController();


            const promise = controller.getRegionDetailPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
