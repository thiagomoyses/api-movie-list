import { Request, Response, NextFunction } from "express"
import * as joi from 'joi';
import { Responses } from "../responses/responses";

export const bodyValidator = (req: Request, res: Response, next: NextFunction, schema: joi.ObjectSchema) => {
    const response = new Responses();
    const { error } = schema.validate(req.body);

    if(error){
        const message = error.details[0].message.replace(/["\\]/g, '');
        return res.status(400).json(response.sendResponse(false, message, null));
    }

    next();
}