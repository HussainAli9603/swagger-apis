import { NextFunction } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import { token } from "morgan";
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';

export const checkJwtToken = (
    req: any,
    res: any,
    next: NextFunction
  ) => {
    const bearerHeader:any = req.headers["authorization"];
    if(typeof bearerHeader !== "undefined"){
        var bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        const decoded = jwt.verify(bearerToken,secret);
        req.user = decoded;
        return next();
    }else{
        req.status(403)
    }
  };