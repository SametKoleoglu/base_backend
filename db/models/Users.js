const { PASS_LENGTH, HTTP_CODES } = require("../../config/Enum");
const CustomError = require("../../lib/Error");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const is = require("is_js");
const bcrypt = require("bcrypt-nodejs");
const { DEFAULT_LANGUAGE } = require("../../config/index");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    language: {
      type: String,
      default: DEFAULT_LANGUAGE,
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

class Users extends mongoose.Model {
  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }

  static validateFieldsBeforeAuth(email, password) {
    if (
      typeof email !== "string" ||
      password.length < PASS_LENGTH ||
      is.not.email(email)
    ) {
      throw new CustomError(
        HTTP_CODES.UNAUTHORIZED,
        "Validation error",
        "Email or password wrong!!!"
      );
    }
    return null;
  }
}

UserSchema.loadClass(Users);
module.exports = mongoose.model("Users", UserSchema);
