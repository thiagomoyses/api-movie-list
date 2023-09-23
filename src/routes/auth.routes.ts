import { Router } from "express";
import { AuthController } from "../modules";

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);


export { router }