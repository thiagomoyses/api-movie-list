import * as joi from "joi";

export const movieSchema = joi.object({
    title: joi.string().required(),
    category: joi.string().required(),
    status: joi.string().required(),
    user_reff: joi.string().required(),
});