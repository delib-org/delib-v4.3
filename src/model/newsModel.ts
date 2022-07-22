import Joi from "joi";

export enum EntityType{
    CONSULTATION = 'consultation',
    MESSAGE = 'message'
}

export const EntityTypeSchema = Joi.string().valid(EntityType.CONSULTATION,EntityType.MESSAGE)