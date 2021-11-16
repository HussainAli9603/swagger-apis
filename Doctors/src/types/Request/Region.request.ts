import { StringLiteralLike } from "typescript";
export interface Region{
    name: string;
    nameKey: string;
    code: string;
    links:Links[];
  }
  export interface Links{
    rel:string,
    href:string,
  }

  export interface ReqMetaDataa{
    dataSource: string;
    extractDate: number;
    itemCount: number;
    returncode: number;
    totalCount: number;
    totalPages: number;
    pageSize:number;
    pageNumber:number;
    links:Links222[];
  }
  export interface Links222{
    rel:string,
    href:string,
  }
  export interface getRegionById{
    id:string
  }

  export interface sortingRegions{
    SortBy:string
  }

  export interface Pagination{
    pageNumber:number,
    pageSize:number,
  }

  export interface ReqImageUpload{
    image:string,
  }


  