import { prisma } from "../../prisma/client";
import { Responses } from "../../responses/responses";
import { CategoryDto } from "./dto";

export class CategoryService {

    private responses = new Responses();

    async saveNewCategory({ name }: CategoryDto) {

        try {
            const findCategory = await prisma.category.findUnique({
                where: {
                    name
                }
            });

            if (findCategory) return this.responses.dataConflict();

            const saveNewCategory = await prisma.category.create({
                data: {
                    name
                },
                select: {
                    createdAt: true,
                    updatedAt: false,
                    id: true,
                    name: true,
                    movies: true,
                }
            });

            return this.responses.sendResponse(true, "Category created!", saveNewCategory, 201);
        } catch (error) {
            return this.responses.internalError();
        }
    }
}