const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	amount: String,
	price: String,
	category: mongoose.Schema.Types.ObjectId
}, {
	collection: 'dishes'
});

module.exports = mongoose.model('Dish', menuSchema);