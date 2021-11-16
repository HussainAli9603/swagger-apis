import { Response,Request,NextFunction } from "express";

const apikeyauths = (req:Request,res:Response,next:NextFunction) => {
  let apikey
  apikey = req.query.admin_token;
  console.log(apikey)
  if(req.headers.aces){
      apikey = req.headers.aces
  }else{
    apikey = req.headers.admin_token
  }

  if (apikey) {
    if (apikey === "123") {
       return next()
    }else{
        return res.status(401).json({message:"APi Key is Wrong"})
    }
}else{
    return res.status(401).json({message:"No APi Key is Present"})
  }

}
export default apikeyauths