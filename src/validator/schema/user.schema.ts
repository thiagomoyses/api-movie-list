import * as joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});