import { prisma } from "../../prisma/client";
import { Responses } from "../../responses/responses";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

export class AuthService {
    private responses = new Responses();

    async login({ email, password }: AuthDto) {

        try {
            const findUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });

            if (!findUser) return this.responses.sendResponse(false, "Wrong credentials!", null, 401);

            const pwMatches = await argon.verify(findUser.hash, password);
            if (!pwMatches) return this.responses.sendResponse(false, "Wrong credentials!", null, 401);

            return this.responses.sendResponse(true, "User loged!", null, 200);
        } catch (error) {
            return this.responses.sendResponse(false, "Internal error!", null, 500);
        }
    }
}