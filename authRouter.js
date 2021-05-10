const JWT_SECRET = process.env.JWT_SECRET;

const { Router } = require("express");

const jwt = require("jsonwebtoken");

const { getUserByUsername, createUser } = require("./db/index.js");

const authRouter = Router();

// /me

authRouter.get("/me", (req, res, next) => {
  // if user is set, send back user

  // else send back null
  res.send(null);
});

// /login

// /api/auth/login
authRouter.post("/login", (req, res, next) => {
  // req.body
  const { username, password } = req.body;

  // get user by username getUserByUsername

  // check if the password is correct // bcrypt

  // sign & send jwt
});

// /register

authRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;

  // get user by username;
  const _user = await getUserByUsername(username);
  // if user exists, throw an error ('username taken');
  if (_user) {
    const error = new Error("username is taken");
    next(error);
  }
  // else
  // createUser({username, password})
  const user = await createUser({ username, password });

  // sign and send jwt
  const token = jwt.sign(user, JWT_SECRET);

  res.send({ user, message: "you are signed in!", token });

});

module.exports = authRouter;
