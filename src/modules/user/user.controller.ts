import { Request, Response } from "express-serve-static-core";
import { UserDto } from "./dto";
import { UserService } from "./user.service";

export class UserController {
    async createNewUser(req: Request, res: Response){

        const userService = new UserService();

        try {
            const payload: UserDto = req.body;
            const saveUser = await userService.createNewUser(payload);

            return saveUser;
        } catch (error) {
            throw error;
        }

    }
}