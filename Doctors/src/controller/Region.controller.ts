import { IRegion } from '../types/document/IRegion';
import { MainRegion } from '../repositories/Region.repositories';
import CustomeError from '../utills/error';
import { Route, Tags, Post, Body, Get, Delete,Query, Put } from "tsoa";
import { ShowRegion,ResMetaData,CombineArray, ShowImageee } from '../types/response/Region.response';
import { Region,ReqMetaDataa,Pagination,ReqImageUpload,getRegionById,sortingRegions } from '../types/request/Region.request';


@Route('region')
@Tags('region')
export class RegionController {
  constructor() {

  }
  @Get('/get-region')
  async getRegionData():Promise<CombineArray>{
    const getRegion:any = await new MainRegion().getRegion();
    return <CombineArray>(getRegion)
  }
  async getMetaData():Promise<ResMetaData>{
    const getMeta:any = await new MainRegion().getMeta();
    return <ResMetaData>(getMeta)
  }
  @Post('/save-region')
  async SaveData(@Body() getReq:Region):Promise<ShowRegion>{
    const SaveRegion:any = await new MainRegion().SaveRegionData(getReq)
    return <ShowRegion>(SaveRegion)
  }
  
  @Post('/save-meta')
  async SaveeMetaData(@Body() getSReq:ReqMetaDataa):Promise<ResMetaData>{
    const SaveMeta:any = await new MainRegion().SaveMetaData(getSReq);
    return <ResMetaData>(SaveMeta)
  }

  @Post('/pagination')
  async Pagination(@Body() getReq:Pagination ):Promise<CombineArray>{
    const getData:any = await new MainRegion().PaginateData(getReq.pageNumber,getReq.pageSize);
    return <CombineArray>(getData)
  }
  @Post('/get-region-by-id')
  async getRegionBy(@Body() getReq:getRegionById):Promise<ShowRegion>{
    const getDataRegion:any = await new MainRegion().GetSingleRegion(getReq.id)
    return<ShowRegion>(getDataRegion)
  }
  
  @Post('/sorting')
  async sorting(@Body() getReq:sortingRegions):Promise<ShowRegion>{
    const sortDataRegion:any = await new MainRegion().SortingRegionss(getReq.SortBy);
    return <ShowRegion>(sortDataRegion)
  }

  @Post('/upload-image')
  async ImageUp(@Body() getReq:ReqImageUpload):Promise<ShowImageee>{
    console.log("constroller 1" + getReq)
    const saveDataa:any = await new MainRegion().ImageUpload(getReq)
    console.log("Controller" + saveDataa)
    return <ShowImageee>(saveDataa)
  }

  @Post('/get-region-by-id/{id}')
  async getRegionBy2(id:string):Promise<ShowRegion>{
    const getDataRegion:any = await new MainRegion().GetSingleRegion2(id)
    return<ShowRegion>(getDataRegion)
  }

  @Get('/paginations/region?page={page}&limit={limit}')
  async PaginationQuery(@Query() limit:number,page:number ):Promise<CombineArray>{
    const getData:any = await new MainRegion().QueryApiPagination(limit,page);
    return <CombineArray>(getData)
  }

  

}
