import { Request, Response } from "express";
import { MoviesService } from "./movies.service";

export class MoviesController {
    async saveNewMovie(req: Request, res: Response){
        const { title, category, status, user_reff } = req.body;

        const saveNewUser = new MoviesService();

        const result = await saveNewUser.saveNewMovie({title, category, status, user_reff});

        const statusCode = result.success ? 201 : 409;

        return res.status(statusCode).json(result);
    }
}