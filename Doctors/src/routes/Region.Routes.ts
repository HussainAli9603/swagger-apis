import express from 'express';
import { RegionController } from '../controller/Region.controller';
import { IRegion } from '../types/document/IRegion';
import { RegionSchema } from '../model/regions.model';
import { Region,getRegionById } from '../types/request/Region.request';
import { ShowRegion } from '../types/response/Region.response';
import CustomeError from '../utills/error';
import fs from 'fs-extra';
import mkdir from 'mkdirp';



export class RegionRoutes {
    router: express.Router;
    constructor() {
      this.router = express.Router();
      this.routes();
    }
    routes() {
        this.router.get('/get-region', async (req:any, res, next) => {
            try {
              const RRegionList:any = await new RegionController().getRegionData();
                
              res.status(200).json({
                regions: RRegionList,
                meta:{
                  "dataSource": "sample Meta Data",
                  "extractDate": Date.now(),
                  "itemCount": RRegionList.length,
                  "returncode": 232,
                  "totalCount": RRegionList.length,
                  "totalPages": RRegionList.length,
                  "pageSize": 1,

                  "pageNumber": 1,
                  "links":[{
                      "rel":"self",
                      "href":"http://api.ratings.food.gov.uk/regions"
                    }]
                }
              });
      
            } catch (error) {
              next(error);
            }
          });
       
          this.router.post('/save-region',async (req,res,next)=>{
            try{
            const SaveRegion:any = req.body;
            const saveDataRegion:any = await new RegionController().SaveData(SaveRegion)
             if(saveDataRegion){
              res.status(200).json({ regions: saveDataRegion });
             }else{
              res.status(404).json("Error");
             }
            }catch(error){
               next(error)
            }
          });

          this.router.post('/save-meta',async (req,res,next)=>{
            try{
              const SaveMeta:any = req.body;
              const saveMetaaData:any = await new RegionController().SaveeMetaData(SaveMeta)
               if(saveMetaaData){
                res.status(200).json({ meta: saveMetaaData });
               }else{
                res.status(404).json("Error");
               }
            }catch(error){
              next(error)
            }
          })
          
          this.router.post('/pagination', async (req:any, res, next) => {
            try {
              const enterData:any = req.body;
              if(enterData.pageSize == 0){
                res.json("error")
              }else{
              const PaginationList:any = await new RegionController().Pagination(enterData);
            
              res.status(200).json({
                regions: PaginationList,
                meta:{
                  "dataSource": "sample Meta Data",
                  "extractDate": Date.now(),
                  "itemCount": PaginationList.length,
                  "returncode": 232,
                  "totalCount": PaginationList.length,
                  "totalPages": PaginationList.length,
                  "pageSize": 1,
                  "pageNumber": 1,
                  "links":[
                    {"rel":"self","href":`http://api.ratings.food.gov.uk/regions`},
                    {"rel":"first","href":`http://api.ratings.food.gov.uk/regions/${enterData.pageSize}/${enterData.pageNumber+1}`},
                    {"rel":"previous","href":`http://api.ratings.food.gov.uk/regions/${enterData.pageSize}/${enterData.pageNumber+2}`},
                    {"rel":"next","href":`http://api.ratings.food.gov.uk/regions/${enterData.pageSize}/${enterData.pageNumber+3}`},
                    {"rel":"last","href":`http://api.ratings.food.gov.uk/regions/${enterData.pageSize}/${enterData.pageNumber+4}`}
                  ]
                }
              });
            }
            } catch (error) {
              next(error);
            }
          });

          this.router.post('/get-region-by-id',async(req,res,next)=>{
             try {
              const getreq:any = req.body;
                const getRegionData:any = await new RegionController().getRegionBy(getreq);
                res.status(200).json({
                  Region:getRegionData
                })
            } catch (error) {
              next(error);
            }      
          });

          this.router.post('/sorting',async(req,res,next)=>{
            try {
             const getreq:any = req.body;
             console.log(getreq)
               const sortsRegion:any = await new RegionController().sorting(getreq);
               console.log(sortsRegion)
               res.status(200).json({
                 Region:sortsRegion
               })
           } catch (error) {
             next(error);
           }      
         });
      
          this.router.post('/upload-image',async (req,res,next)=>{
            try{
              const getReqImage:any = req.files;
              console.log(getReqImage)
              const dir = "public/upload/images/";
              // const Mkdir = fs.mkdirSync(dir)
              const ImageUrl:any = dir + Date.now() + getReqImage.image.name;
              console.log(ImageUrl)
              // const MoveImage = getReqImage.mv(ImageUrl)
             
              const saveImage:any = await new RegionController().ImageUp(ImageUrl);
               if(saveImage){
                res.status(200).json({ Image: saveImage });
               }else{
                res.status(404).json("Error");
               }
            }catch(error){
              next(error)
            }
          })

          this.router.post('/get-region-by-id/:id',async(req,res,next)=>{
            try {
             const getreq:any = req.params;
               const getRegionData:any = await new RegionController().getRegionBy2(getreq.id);
               res.status(200).json({
                 Region:getRegionData
               })
           } catch (error) {
             next(error);
           }      
         });

           
         this.router.get('/paginations/region?page=page&limit=limit', async (req:any, res, next) => {
          try {
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)
            console.log("route"+ limit)
            console.log("route" + page)

            const startIndex:any = (page - 1) * limit
            const endIndex = page * limit
            const results = {}
           
            if(startIndex == 0){
              res.json("error")
            }else{
            const PaginationList:any = await new RegionController ().PaginationQuery(limit,page);
          
            res.status(200).json({
              regions: PaginationList,
              meta:{
                "dataSource": "sample Meta Data",
                "extractDate": Date.now(),
                "itemCount": PaginationList.length,
                "returncode": 232,
                "totalCount": PaginationList.length,
                "totalPages": PaginationList.length,
                "pageSize": 1,
                "pageNumber": 1,
                "links":[
                  {"rel":"self","href":`http://api.ratings.food.gov.uk/regions`},
                  {"rel":"first","href":`http://api.ratings.food.gov.uk/regions/${page}/${limit+1}`},
                  {"rel":"previous","href":`http://api.ratings.food.gov.uk/regions/${page}/${limit+2}`},
                  {"rel":"next","href":`http://api.ratings.food.gov.uk/regions/${page}/${limit+3}`},
                  {"rel":"last","href":`http://api.ratings.food.gov.uk/regions/${page}/${limit+4}`}
                ]
              }
            });
          }
          } catch (error) {
            next(error);
          }
        });






        





          


    }

}


export const RegionRoutesApi = new RegionRoutes().router;

