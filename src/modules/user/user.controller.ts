import { Request, Response } from "express-serve-static-core";
import { UserDto } from "./dto";
import { UserService } from "./user.service";

export class UserController {
    async createNewUser(req: Request, res: Response){

        const userService = new UserService();

        try {
            const payload: UserDto = req.body;
            const saveUser = await userService.createNewUser(payload);

            return res.status(saveUser.status).json(saveUser);
        } catch (error) {
            return res.status(500).json({ success: false, message: "internal error!", data: null });
        }

    }
}