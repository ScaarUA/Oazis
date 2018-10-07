const mongoose = require('mongoose');
const MenuCategory = require('../../../models/MenuCategory');
const Dish = require('../../../models/Dish');

function getAllCategories(req, res) {
	MenuCategory.find({}, (err, categories) => {
		if (err) {
			return res.sendStatus(500);
		}

		res.json(categories);
	})
}

function createCategory(req, res) {
	const _id = mongoose.Types.ObjectId();
	const newCategory = {
		_id,
		name: req.body.name
	};

	MenuCategory.create(newCategory, (err, category) => {
		if (err) {
			return res.sendStatus(500);
		}

		res.setHeader('Location', `/menu/categories/${category._id}`);

		res.status(201)
			.json(category);
	})
}

function deleteCategory(req, res) {
	const dbQuery = {
		_id: req.params.categoryId
	};

	MenuCategory.deleteOne(dbQuery, err => {
		if (err) {
			return res.sendStatus(500);
		}

		Dish.deleteMany({category: req.params.categoryId}, err => {
			if (err) {
				return res.sendStatus(500);
			}

			res.sendStatus(204);
		})
	});
}

function updateCategory(req, res) {
	const dbQuery = {
		_id: req.params.categoryId
	};
	const updatedCategory = req.body;

	MenuCategory.findOne(dbQuery, (err, category) => {
		if (err) {
			return res.sendStatus(500);
		}

		category.set(updatedCategory);
		category.save(err => {
			if (err) {
				return res.sendStatus(500);
			}

			res.sendStatus(204);
		});
	});
}

module.exports = {
	getAllCategories,
	createCategory,
	deleteCategory,
	updateCategory
};