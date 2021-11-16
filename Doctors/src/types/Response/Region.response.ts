import { LLinks } from "../document/IRegion"
export interface ShowRegion{
    _id:string;
    name: string;
    nameKey: string;
    code: string;
    links:LLinks[];
  }
  export interface ResMetaData{
    _id:string;
    dataSource: string;
    extractDate: string;
    itemCount: string;
    returncode: string;
    totalCount: string;
    totalPages: string;
    pageSize:string;
    pageNumber:string;
    links:Links3[];
  }
  export interface Links3{
    rel:string,
    href:string,
  }

  export interface CombineArray{
    region:ShowRegion[],
    meta:ResMetaData[],
  }

  export interface ShowImageee{
    _id:string;
    image:string,
  }



