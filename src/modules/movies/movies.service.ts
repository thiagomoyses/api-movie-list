import { prisma } from "../../prisma/client";
import { Responses } from "../../responses/responses";
import { MoviesDto } from "./dto";

export class MoviesService {

    private responses = new Responses();

    async saveNewMovie({ title, category, status, user_reff }: MoviesDto) {
        try {
            const getMovie = await prisma.movie.findUnique({
                where: {
                    title
                }
            });

            if (getMovie) return this.responses.sendResponse(false, "Movie Already saved", null, 409);

            const newMovie = await prisma.movie.create({
                data: {
                    title,
                    category,
                    status,
                    user_reff
                },
                select: {
                    id: false,
                    createdAt: true,
                    updatedAt: false,
                    user_reff: false,
                    title: true,
                    category: true,
                    status: true
                }
            });

            return this.responses.sendResponse(true, "Movie Saved", newMovie, 201);

        } catch (error) {
            return this.responses.sendResponse(false, "Internal error!", null, 500);
        }

    }

    async getMovieList() {
        try {
            const getAllMovies = await prisma.movie.findMany();

            if (getAllMovies.length === 0) return this.responses.sendResponse(true, "There is no movie registered!", getAllMovies, 200);

            return this.responses.sendResponse(true, "List of movies!", getAllMovies, 200);
        } catch (error) {
            return this.responses.sendResponse(false, "Internal error!", null, 500);
        }
    }
}