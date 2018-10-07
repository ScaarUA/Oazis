const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	showMenu: Boolean
}, {
	collection: 'settings'
});

module.exports = mongoose.model('Settings', settingsSchema);