import Joi from "joi";

const rolePermission = Joi.object({
  role: Joi.string().valid("Owner", "Admin", "Seller", "Reader").valid(),
  permission: Joi.string()
    .valid(
      "Read_tables",
      "Change_tables",
      "Add_tables",
      "Delete_tables",
      "Add_users",
      "Remove_users",
      "Edit_userRole"
    )
    .required(),
});