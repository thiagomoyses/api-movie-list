import { Router } from "express";
import * as movieRoutes from './movies.routes';
import * as userRoutes from './user.routes';
import * as authRoutes from "./auth.routes";
import { bodyValidator } from "../middlewares/index";
import { movieSchema, userSchema } from "../validator";

const routes = Router();

routes.use('/movies', (req, res, next) => {
    bodyValidator(req, res, next, movieSchema);
}, movieRoutes.router);

routes.use('/users', (req, res, next) => {
    bodyValidator(req, res, next, userSchema);
} ,userRoutes.router);

routes.use('/auth', authRoutes.router);

export { routes };