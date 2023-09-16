import { prisma } from "../../prisma/client";
import { Responses } from "../../responses/responses";
import { MoviesDto } from "./dto";

export class MoviesService {
    async saveNewMovie({ title, category, status, user_reff }: MoviesDto) {

        const responses = new Responses();

        try {
            const getMovie = await prisma.movie.findUnique({
                where: {
                    title
                }
            });

            if(getMovie) return responses.sendResponse(false, "Movie Already saved");

            const newMovie = await prisma.movie.create({
                data: {
                    title,
                    category,
                    status,
                    user_reff
                }
            });

            return responses.sendResponse(true, "Movie Saved", newMovie);

        } catch (error) {
            throw error;
        }

    }
}