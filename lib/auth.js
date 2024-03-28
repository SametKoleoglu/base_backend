const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const Users = require("../db/models/Users");
const UserRoles = require("../db/models/UserRoles");
const RolePrivileges = require("../db/models/RolePrivileges");

const config = require("../config/index");
const privs = require("../config/role_privileges");
const Response = require("./Response");
const Enum = require("../config/Enum");
const CustomError = require("./Error");

module.exports = function () {
  let strategy = new Strategy(
    {
      secretOrKey: config.JWT.SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        let user = await Users.findOne({ _id: payload.id });
        if (user) {
          let userRoles = await UserRoles.find({ user_id: payload.id });

          let rolePrivileges = await RolePrivileges.find({
            role_id: { $in: userRoles.map((r) => r.role_id) },
          });

          let privileges = rolePrivileges.map((p) =>
            privs.privileges.find((priv) => priv.key === p.permission)
          );

          done(null, {
            id: user._id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            roles: privileges,
            language: user.language,
            exp: parseInt((Date.now() / 1000) * config.JWT.EXPIRE_TIME),
          });
        } else {
          done(new Error("User not found"), null);
        }
      } catch (err) {
        done(err, null);
      }
    }
  );

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate("jwt", { session: false }),
    checkRoles:
      (...expectedRoles) =>
      (req, res, next) => {
        let i = 0;
        let privileges = req.user?.roles.map((r) => r.key);

        while (
          i < expectedRoles.length &&
          !privileges.includes(expectedRoles[i])
        )
          i++;

        if (i >= expectedRoles.length) {
          let response = Response.errorResponse(
            new CustomError(
              Enum.HTTP_CODES.UNAUTHORIZED,
              "Need Permission",
              "Need Permission"
            )
          );
          return res.status(response.code).json(response);
        }
        return next();
      },
  };
};
