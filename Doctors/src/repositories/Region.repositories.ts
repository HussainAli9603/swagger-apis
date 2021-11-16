import path from 'path/posix';
import { IRegion } from '../types/document/IRegion';
import { IMetaData } from '../types/document/IMetaData';
import { RegionSchema } from '../model/regions.model';
import { ImageSchema } from '../model/images';
import { MetaSchema } from '../model/metadata.model';

export class MainRegion {
  constructor() {}
  getRegion() {
    return RegionSchema.find();
  }
  getMeta() {
    return MetaSchema.find();
  }
  SaveRegionData(saveData:any){
    return new RegionSchema(saveData).save();
  }

  SaveMetaData(saveMetaData:any){
    return new MetaSchema(saveMetaData).save();
  }
  PaginateData(pageNumber:any,pageSize:any){
    const skipNumber = (pageNumber -1 ) * pageSize;
    return RegionSchema.find().limit(pageSize).skip(skipNumber);
  }
  QueryApi(pageNumber:any,pageSize:any){
    const skipNumber = (pageNumber -1 ) * pageSize;
    return RegionSchema.find().limit(pageSize).skip(skipNumber);
  }
  GetSingleRegion(_id:string){
    return RegionSchema.findById(_id);
  }

  SortingRegionss(SortBy:string){
    console.log(SortBy)
    return RegionSchema.find().sort("-SortBy");
  }

  ImageUpload(image:any){
    return new ImageSchema({image}).save()
  }

  GetSingleRegion2(_id:string){
    return RegionSchema.findById(_id);
  }

  QueryApiPagination(page:any,limit:any){ 
    console.log("repo"+ limit)
    console.log("repo" + page)
    return RegionSchema.find().limit(limit).skip(page);
  }


  
}