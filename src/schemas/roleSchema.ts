import Joi from "joi";

const roleSchema = Joi.object({
  name: Joi.string().valid("Owner", "Admin", "Seller", "Reader").required(),
});

export default roleSchema;
