const express = require('express');
const authRouter = express.Router();
const {loginUser, logoutUser, restoreUser} = require('./authControllers');

authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);
authRouter.get('/restore', restoreUser);

module.exports = authRouter;