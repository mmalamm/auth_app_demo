const { Router } = require("express");

const apiRouter = Router();

const authRouter = require("./authRouter.js");

const jwt = require("jsonwebtoken");
const { getUserByUsername } = require("./db/index.js");

const JWT_SECRET = process.env.JWT_SECRET;

const attachUser = async (req, res, next) => {
  const authToken = req.header("Authorization");

  if (!authToken) {
    return next();
  } else {
    const token = authToken.slice("Bearer ".length);

    const { username } = jwt.verify(token, JWT_SECRET);

    try {
      const user = getUserByUsername(username);

      if (user) {
        delete user.password;
        req.user = user;
        next();
      } else {
        next(new Error("user not found!!"));
      }
    } catch (error) {
      throw error;
    }
  }
};

apiRouter.use(attachUser);

apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
