import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

export class AuthController {
    async login(req: Request, res: Response){
        
        const authService = new AuthService();
        const payload: AuthDto = req.body
        const tryLogin = await authService.login(payload);

        return res.status(tryLogin.status).json(tryLogin);
    }
}