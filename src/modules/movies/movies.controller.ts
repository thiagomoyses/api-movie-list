import { Request, Response } from "express";
import { MoviesService } from "./movies.service";
import { MoviesDto } from "./dto";

export class MoviesController {
    async saveNewMovie(req: Request, res: Response) {

        try {
            const payload: MoviesDto = req.body;
            const saveNewUser = new MoviesService();
            const result = await saveNewUser.saveNewMovie(payload);

            const statusCode = result.status;
            
            return res.status(statusCode).json(result);
        } catch (error) {
            return res.status(500).json({success: false, message: "internal error!", data: null});
        }
    }
}