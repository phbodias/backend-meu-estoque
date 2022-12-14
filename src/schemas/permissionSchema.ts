import Joi from "joi";

const permissionSchema = Joi.object({
  name: Joi.string()
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
  description: Joi.string().min(3).max(500).required(),
});

export default permissionSchema;
