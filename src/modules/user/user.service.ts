import { prisma } from "../../prisma/client";
import { UserDto } from "./dto";
import { Responses } from "../../responses/responses";
import * as argon from "argon2";

export class UserService {
    private responses = new Responses();

    async createNewUser({ name, email, password }: UserDto) {

        try {
            const getUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });

            if (getUser) return this.responses.sendResponse(false, "User already registered!", null, 409);

            const hashPwd = await argon.hash(password);

            const firstLetters = name.substring(0, 3).toUpperCase();
            const date = new Date().getTime();
            const randomNumber = Math.floor(Math.random() * 900) + 100;

            const userRefCode = firstLetters + date + randomNumber;

            const saveNewUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    hash: hashPwd,
                    user_reff: userRefCode
                },
                select: {
                    createdAt: true,
                    updatedAt: false,
                    name: true,
                    email: true,
                    user_reff: true,
                    hash: false
                }
            });

            return this.responses.sendResponse(true, "User successfuly created!", saveNewUser, 201);
        } catch (error) {
            return this.responses.sendResponse(false, "Internal error!", null, 500);
        }
    }
}