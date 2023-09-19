import { Request, Response, NextFunction } from "express"
import * as joi from 'joi';
import { Responses } from "../responses/responses";
import { exceptionRoutes } from "./exceptions";

export const bodyValidator = (req: Request, res: Response, next: NextFunction, schema: joi.ObjectSchema) => {

    //add exception for route
    if (exceptionRoutes.bodyValidator.includes(req.originalUrl)) {
        next();
    } else {
        const response = new Responses();
        const { error } = schema.validate(req.body);

        if (error) {
            const message = error.details[0].message.replace(/["\\]/g, '');
            return res.status(400).json(response.sendResponse(false, message, null));
        }

        next();
    }
}