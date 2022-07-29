import Joi from "joi";
import { UserProps } from "../cont/store/store";
import { Consultation, ConsultationSchema } from "./consultationModel";
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
    created:FirebaseTimeSchema,
    updated:FirebaseTimeSchema,
    creator:UserSchema,
    groupId:Joi.string().required(),
    id:Joi.string().required(),
})