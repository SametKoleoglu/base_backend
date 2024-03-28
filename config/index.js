module.exports = {
  "LOG_LEVEL": process.env.LOG_LEVEL || "debug",
  "CONNECTION_STRING":
    process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/base_backend",
  "PORT": process.env.PORT || 3000,
  "JWT":{
    "SECRET":"123456789",
    "EXPIRE_TIME": !isNaN(parseInt(process.env.TOKEN_EXPIRE_TIME)) ? parseInt(process.env.TOKEN_EXPIRE_TIME) : 86400
  },
  "DEFAULT_LANGUAGE":process.env.DEFAULT_LANGUAGE || "EN"
};
