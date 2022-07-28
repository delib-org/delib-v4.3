import Joi from "joi";
import { UserProps } from "../cont/store/store";
import { Consultation, ConsultationSchema } from "./consultationModel";
import { FirebaseTime, FirebaseTimeSchema } from "./timeModel";
import { UserSchema } from "./userModel";

export enum EntityType{
    CONSULTATION = 'consultation',
    MESSAGE = 'message'
}

export interface News{
    id?:string,
    creator:UserProps,
    entityType:EntityType,
    group:Consultation,
    groupId:string,
    text:string,
    update:FirebaseTime
}
export const EntityTypeSchema = Joi.string().valid(EntityType.CONSULTATION,EntityType.MESSAGE)

export const NewsSchema = Joi.object({
    creator:UserSchema,
    entityType:Joi.string().valid(EntityType.CONSULTATION,EntityType.MESSAGE),
    group:ConsultationSchema,
    groupId:Joi.string(),
    text:Joi.string(),
    update:FirebaseTimeSchema
})

export const MessageSchema = Joi.string().required();

