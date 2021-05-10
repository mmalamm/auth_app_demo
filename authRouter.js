const {Router} = require('express');

const authRouter = Router();

// /me

authRouter.get('/me', (req, res, next) => {
    // if user is set, send back user

    // else send back null
    res.send(null);
})

// /login

// /api/auth/login
authRouter.post('/login', (req, res, next) => {
    // req.body
    const {username, password} = req.body;

    // get user by username getUserByUsername

    // check if the password is correct // bcrypt

    // sign & send jwt
})




// /register

authRouter.post('/register', (req, res, next) => {
    const {username, password} = req.body;

    // get user by username;
    // if user exists, throw an error ('username taken');
    // else 
    // createUser({username, password}) // hash and salt pw w/ bcrypt
    // sign and send jwt
})

module.exports = authRouter;