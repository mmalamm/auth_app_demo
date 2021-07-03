const JWT_SECRET = process.env.JWT_SECRET;

const { Router } = require("express");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const { getUserByUsername, createUser } = require("./db/index.js");

const authRouter = Router();

authRouter.get("/me", (req, res, next) => {
  const { user } = req;
  if (user) {
    res.send({ user });
  } else {
    res.send({ user: null });
  }
});

authRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(new Error("Missing login credentials!"));
  }
  try {
    const user = await getUserByUsername(username);

    if (!user) {
      next(new Error(`user with username ${username} not found!`));
    } else {
      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (passwordsMatch) {
        delete user.password;
        const token = jwt.sign(user, JWT_SECRET);
        res.send({
          user,
          token,
          message: `logged in as ${username} successfully!`,
        });
      } else {
        res.send({
          error: "invalid credentials!",
          message: "username and/or password is incorrect!",
        });
      }
    }
  } catch (error) {
    console.error("error getting user by username");
    throw error;
  }
});

authRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(new Error("Missing login credentials!"));
  }
  const _user = await getUserByUsername(username);

  if (_user) {
    const error = new Error("username is taken");
    next(error);
  }

  const user = await createUser({ username, password });
  const token = jwt.sign(user, JWT_SECRET);
  res.send({ user, message: "you are signed in!", token });
});

module.exports = authRouter;
