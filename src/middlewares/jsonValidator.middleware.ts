import { Request, Response, NextFunction } from "express";
import { Responses } from "../responses/responses";

export const jsonValidator = (req: Request, res: Response, next: NextFunction) => {
    const response = new Responses();

    if(req.method === 'GET'){
        next();
    }
    else if (req.is('application/json') && req.body !== undefined && req.body !== null && Object.keys(req.body).length > 0) {
        try {
            JSON.parse(JSON.stringify(req.body));
            next();
        } catch (error) {
            res.status(400).json(response.sendResponse(false, "Not a valid JSON!", null));
        }
    } else {
        return res.status(400).json(response.sendResponse(false, "Request needs to be a JSON!", null));
    }
};