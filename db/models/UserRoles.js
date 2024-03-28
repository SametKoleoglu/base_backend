const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserRolesSchema = new Schema(
  {
    role_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class UserRoles extends mongoose.Model {
  constructor() {
    super();
  }
}

UserRolesSchema.loadClass(UserRoles);
module.exports = mongoose.model("UserRoles", UserRolesSchema);
