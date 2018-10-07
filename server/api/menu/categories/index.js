const express = require('express');
const categoriesRouter = express.Router();
const {getAllCategories, createCategory, deleteCategory, updateCategory} = require('./categoriesControllers');
const dishesRouter = require('./dishes');
const {checkLogin} = require('../../../auth/authControllers');

categoriesRouter.get('/', getAllCategories);
categoriesRouter.post('/', checkLogin, createCategory);
categoriesRouter.delete('/:categoryId', checkLogin, deleteCategory);
categoriesRouter.put('/:categoryId', checkLogin, updateCategory);

categoriesRouter.use('/:categoryId/dishes', dishesRouter);

module.exports = categoriesRouter;