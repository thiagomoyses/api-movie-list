import { Request, Response } from "express";
import { CategoryDto } from "./dto";
import { CategoryService } from "./category.service";
import { Responses } from "../../responses/responses";

export class CategoryController {

    async saveNewCategory(req: Request, res: Response){
        const categoryService = new CategoryService();
        const responses = new Responses();
        try {
            const payload: CategoryDto = req.body
            const saveCategory = await categoryService.saveNewCategory(payload);

            return res.status(saveCategory.status).json(saveCategory);
        } catch (error) {
            const errorResponse = responses.internalError();
            return res.status(errorResponse.status).json(errorResponse);
        }
    }

}