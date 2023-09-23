import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Responses } from "../responses/responses";
import Configs from "../config/configs";

export interface CustomReq extends Request {
    user_reff: string | JwtPayload
}

export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {

    const responses = new Responses();
    const configs = new Configs();

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            const errorResponse = responses.sendResponse(false, "Access denied!", null, 401);
            return res.status(errorResponse.status).json(errorResponse);
        }

        const { JWT_SECRET } = configs.jwtParams();
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        (req as CustomReq).user_reff = decodedInfo;

        next();

    } catch (error) {
        const resp = responses.sendResponse(false, "Access denied!", null, 401);
        return res.status(resp.status).json(res);
    }
}