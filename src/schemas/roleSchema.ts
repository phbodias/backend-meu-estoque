import Joi from "joi";

const RoleSchema = Joi.object({
  name: Joi.string().valid("Owner", "Admin", "Seller", "Reader").required(),
});
