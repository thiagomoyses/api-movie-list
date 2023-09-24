import * as joi from "joi";

export const movieSchema = joi.object({
    title: joi.string().required(),
    description: joi.string(),
    director: joi.string(),
    category: joi.number().required(),
    status: joi.string().required(),
    user_reff: joi.string().required()
});