import Joi from "joi";

export const UserSchema = Joi.object({
  displayName: Joi.string().required(),
  email: Joi.string().allow(null),
  photoURL:Joi.string().allow(null),
  isAnonymous:Joi.boolean(),
  uid:Joi.string()
});
