import Joi from "joi";

export enum Role{
    ADMIN = 'admin',
    CREATOR = 'creator',
    MEMBER = 'member',
  }
  
  export interface Membership{
    groupId:string;
    role:Role
    joined:Date
  }

  export const membershipSchema = Joi.object({
    groupId:Joi.string().required(),
    role:Joi.string().allow('admin','member','creator'),
    joined:Joi.object({
      seconds:Joi.number(),
      nanoseconds:Joi.number()
    })
  })
  