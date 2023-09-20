import { prisma } from "../../prisma/client";
import { UserDto } from "./dto";
import { Responses } from "../../responses/responses";

export class UserService {
    private responses = new Responses();

    async createNewUser({name, email, password}: UserDto){

        const findUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(findUser) return this.responses.sendResponse(false, "User already registered!", null, 409);

        const saveNewUser = prisma.user.create({
            data: {
                name,
                email,
                hash: password,
                user_reff: "teste"
            }
        });

        return this.responses.sendResponse(true, "User created!", saveNewUser, 201);
    }
}