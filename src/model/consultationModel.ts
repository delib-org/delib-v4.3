import Joi from "joi";

import { UserSchema } from "./userModel";
import { FirebaseTime, FirebaseTimeSchema } from "./timeModel";
import { GroupType } from "../view/pages/setConsultation/SetConsultation";

export const ConsultationSchema = Joi.object({
  creator: UserSchema,
  description:Joi.string(),
  groupType:Joi.string().allow('public','secret','close'),
  time:Joi.object({created:FirebaseTimeSchema, updated:FirebaseTimeSchema}),
  title:Joi.string().required(),
  members:Joi.array(),
  id:Joi.string()
});

export enum Section{
  INTRO = 'intro',
  INFO = 'info',
  CHAT = 'chat',
  VOTE = 'vote'
}

export interface SectionProps{
  sections:Section[],
  id:string,
  selectedSection?:Section
}

export const SectionsSchema = Joi.object({
  sections:Joi.array().items(Joi.string().valid(Section.CHAT,Section.INFO)),
  id:Joi.string()
})

export interface Consultation{
    creator:Object;
    description:string;
    groupType:GroupType;
    time:{created:FirebaseTime, updated:FirebaseTime};
    title:string;
    id:string;
}



