import { Router } from "express";
import { UserController } from "../modules";

const router = Router();
const userController = new UserController(); 

router.post('/user', userController.createNewUser);

export { router }