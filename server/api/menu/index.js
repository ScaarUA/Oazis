const express = require('express');
const menuRouter = express.Router();
const categoriesRouter = require('./categories');

menuRouter.use('/categories', categoriesRouter);

module.exports = menuRouter;