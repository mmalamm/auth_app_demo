const { Router } = require("express");

const apiRouter = Router();

const authRouter = require("./authRouter.js");

// register user middleware

const attachUser = (req, res, next) => {
  // take the auth token
  // decrypt the auth token, get user's id
  // getUserById(id);
  // req.user = user;
  // next()
};

apiRouter.use(attachUser);

apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
