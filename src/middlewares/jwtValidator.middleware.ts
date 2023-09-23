import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { Responses } from "../responses/responses";
import Configs from "../config/configs";
import { exceptionRoutes } from "./exceptions";

export interface CustomReq extends Request {
    user_reff: string | JwtPayload
}

export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {

    const responses = new Responses();
    const configs = new Configs();

    if(exceptionRoutes.jwtValidator.includes(req.originalUrl)) return next();

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            const errorResponse = responses.accessDenied();
            return res.status(errorResponse.status).json(errorResponse);
        }

        const { JWT_SECRET } = configs.jwtParams();
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        (req as CustomReq).user_reff = decodedInfo;

        next();

    } catch (error) {
        const resp = responses.accessDenied();
        return res.status(resp.status).json(res);
    }
}