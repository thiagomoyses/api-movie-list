import { Router } from "express";
import * as movieRoutes from './movies.routes';

const routes = Router();

routes.use('/movies', movieRoutes.router);

export { routes };