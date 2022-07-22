import Joi from "joi";
import { UserProps } from "./store";
import { FirebaseTimeSchema } from "./timeModel";
import { UserSchema } from "./userModel";

export enum EntityType{
    CONSULTATION = 'consultation',
    MESSAGE = 'message'
}

export interface News{
    creator:UserProps,
    entityType:EntityType,
    entity:Object,
    groupId:string,
    text:string,
    update:Date
}
export const EntityTypeSchema = Joi.string().valid(EntityType.CONSULTATION,EntityType.MESSAGE)

export const NewsSchema = Joi.object({
    creator:UserSchema,
    entityType:Joi.string().valid(EntityType.CONSULTATION,EntityType.MESSAGE),
    entity:Joi.object(),
    groupId:Joi.string(),
    text:Joi.string(),
    update:FirebaseTimeSchema
})

