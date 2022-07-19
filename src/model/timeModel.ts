import Joi from "joi";

export const FirebaseTimeSchema = Joi.object({
    seconds:Joi.number(),
    nanoseconds:Joi.number()
})

export interface FirebaseTime{
    seconds:number;
    nanoseconds:number;
}