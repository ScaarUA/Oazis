const express = require('express');
const dishesRouter = express.Router({mergeParams: true});
const {getAllDishesForCategory, createDish, deleteDish, updateDish} = require('./dishesControllers');
const {checkLogin} = require('../../../../auth/authControllers');

dishesRouter.get('/', getAllDishesForCategory);
dishesRouter.post('/', checkLogin, createDish);
dishesRouter.delete('/:dishId', checkLogin, deleteDish);
dishesRouter.put('/:dishId', checkLogin, updateDish);

module.exports = dishesRouter;