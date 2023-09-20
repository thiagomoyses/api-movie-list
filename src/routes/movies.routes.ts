import { Router } from "express";
import { MoviesController } from "../modules";

const router = Router();
const moviesController = new MoviesController()

router.post('/movie', moviesController.saveNewMovie);
router.get('/all', moviesController.getMovieList);

export { router }