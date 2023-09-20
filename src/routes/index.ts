import { Router } from "express";
import * as movieRoutes from './movies.routes';
import * as userRoutes from './user.routes';
import { bodyValidator } from "../middlewares/index";
import { movieSchema } from "../validator";

const routes = Router();

routes.use('/movies', (req, res, next) => {
    bodyValidator(req, res, next, movieSchema);
}, movieRoutes.router);

routes.use('/users', userRoutes.router);

export { routes };