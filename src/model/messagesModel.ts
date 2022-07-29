import Joi from "joi";
import { UserProps } from "../cont/store/store";
import { FirebaseTime, FirebaseTimeSchema } from "./timeModel";
import { UserSchema } from "./userModel";

export interface MessageProps{
    message:string,
    created:FirebaseTime,
    updated:FirebaseTime,
    creator:UserProps
    groupId:string,
    id:string
  }

export const MessageSchema = Joi.object({
    message:Joi.string().required(),
    created:FirebaseTimeSchema.required(),
    updated:FirebaseTimeSchema.required(),
    creator:UserSchema.required(),
    groupId:Joi.string().required(),
    id:Joi.string().required(),
})