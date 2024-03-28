const Enum = require("../config/Enum");
const config = require("../config/index");
const CustomError = require("./Error");
const i18n = new (require("./i18n"))(config.DEFAULT_LANGUAGE);

class Response {
  constructor() {}

  static successResponse(data, code = 200) {
    return {
      code,
      data,
    };
  }

  static errorResponse(error,language) {
    if (error instanceof CustomError) {
      return {
        code: error.code,
        error: {
          message: error.message,
          description: error.description,
        },
      };
    } else if (error.message.includes("E11000")) {
      return {
        code: Enum.HTTP_CODES.CONFLICT,
        error: {
          message: i18n.translate("COMMON.ALREADY_EXISTS",language),
          description: i18n.translate("COMMON.ALREADY_EXISTS",language),
        },
      };
    }
    return {
      code: Enum.HTTP_CODES.INTERNAL_SERVER_ERROR,
      error: {
        message: i18n.translate("COMMON.UNKNOWN_ERROR",language),
        description: error.message,
      },
    };
  }
}

module.exports = Response;
