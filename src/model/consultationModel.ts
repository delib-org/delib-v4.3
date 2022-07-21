import Joi from "joi";

import { UserSchema } from "./userModel";
import { FirebaseTime, FirebaseTimeSchema } from "./timeModel";
import { GroupType } from "../view/pages/setConsultation/SetConsultation";

export const ConsultationSchema = Joi.object({
  creator: UserSchema,
  description:Joi.string(),
  groupType:Joi.string().allow('public','secret','close'),
  time:Joi.object({created:FirebaseTimeSchema, updated:FirebaseTimeSchema}),
  title:Joi.string().required()
});

export interface Consultation{
    creator:Object;
    description:string;
    groupType:GroupType;
    time:{created:FirebaseTime, updated:FirebaseTime};
    title:string;
    id:string;
}

