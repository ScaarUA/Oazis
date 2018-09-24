const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	login: String,
	password: String,
	name: String,
	surname: String
}, {
	collection: 'users'
});

module.exports = mongoose.model('User', userSchema);