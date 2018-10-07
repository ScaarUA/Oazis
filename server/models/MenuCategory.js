const mongoose = require('mongoose');

const dishCategorySchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String
}, {
	collection: 'menuCategories'
});

module.exports = mongoose.model('MenuCategory', dishCategorySchema);