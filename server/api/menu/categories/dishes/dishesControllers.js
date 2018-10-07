const mongoose = require('mongoose');
const Dish = require('../../../../models/Dish');

function getAllDishesForCategory(req, res) {
	const dbQuery = {
		category: req.params.categoryId
	};

	Dish.find(dbQuery, (err, dishes) => {
		if (err) {
			return res.sendStatus(500);
		}

		res.json(dishes);
	})
}

function createDish(req, res) {
	console.log(req.params);
	const _id = mongoose.Types.ObjectId();
	const newDish = {
		_id,
		name: req.body.name,
		amount: req.body.amount,
		price: req.body.price,
		category: req.params.categoryId
	};

	Dish.create(newDish, (err, dish) => {
		if (err) {
			return res.sendStatus(500);
		}

		res.setHeader('Location', `/menu/categories/${req.params.categoryId}/dishes/${dish._id}`);

		res.status(201)
			.json(dish);
	})
}

function deleteDish(req, res) {
	const dbQuery = {
		_id: req.params.dishId
	};

	Dish.deleteOne(dbQuery, err => {
		if (err) {
			return res.sendStatus(500);
		}

		res.sendStatus(204);
	});
}

function updateDish(req, res) {
	const dbQuery = {
		_id: req.params.dishId
	};
	const updatedDish = req.body;

	Dish.findOne(dbQuery, (err, dish) => {
		if (err) {
			return res.sendStatus(500);
		}

		dish.set(updatedDish);
		dish.save(err => {
			if (err) {
				return res.sendStatus(500);
			}

			res.sendStatus(204);
		});
	});
}

module.exports = {
	getAllDishesForCategory,
	createDish,
	deleteDish,
	updateDish
};