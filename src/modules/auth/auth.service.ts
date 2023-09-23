import jwt from "jsonwebtoken";
import * as argon from 'argon2';

import { prisma } from "../../prisma/client";
import { Responses } from "../../responses/responses";
import { AuthDto } from "./dto";
import Configs from "../../config/configs";


export class AuthService {
    private responses = new Responses();
    private configs = new Configs(); 

    async login({ email, password }: AuthDto): Promise<{ success: boolean, message: string, data: Record<string, any> | null, status: number }> {

        try {
            const findUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });

            if (!findUser) return this.responses.sendResponse(false, "Wrong credentials!", null, 401);

            const pwMatches = await argon.verify(findUser.hash, password);
            if (!pwMatches) return this.responses.sendResponse(false, "Wrong credentials!", null, 401);


            const { JWT_SECRET, JWT_EXPIRATION_TIME, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRATION_TIME } = this.configs.jwtParams();
            const payload = {
                user_reff: findUser.user_reff
            }
            
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });
            const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION_TIME });

            const data: {token: string, refresh_token: string} = {
                token,
                refresh_token: refreshToken
            }

            return this.responses.sendResponse(true, "Successfully logged!", data, 200);

        } catch (error) {
            return this.responses.sendResponse(false, "Internal error!", null, 500);
        }
    }
}