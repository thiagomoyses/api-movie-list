import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
    async login(req: Request, res: Response){
        const authService = new AuthService();

        return res.send(authService.login());    
    }
}