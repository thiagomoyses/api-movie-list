import { Router } from "express";
import { MoviesController } from "../modules";

const router = Router();
const moviesController = new MoviesController()


router.post('/movie', moviesController.saveNewMovie);

// router.get('/all/:id', controllers.moviesControllers.getMovieById);

// router.post('/movie', controllers.moviesControllers.saveMovie);

// router.patch('/movie/:id', controllers.moviesControllers.editMovieById);

// router.delete('/movie/:id', controllers.moviesControllers.deleteMovieById);

export { router }