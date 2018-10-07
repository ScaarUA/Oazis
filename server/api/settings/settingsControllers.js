const Settings = require('../../models/Settings');

function getSettings(req, res) {
	Settings.findOne({}, (err, settings) => {
		if (err) {
			return res.sendStatus(500);
		}

		res.json(settings);
	});
}

function updateSettings(req, res) {
	const newSettings = req.body;

	Settings.findOne({}, (err, settings) => {
		if (err) {
			return res.sendStatus(500);
		}

		settings.set(newSettings);
		settings.save(err => {
			if (err) {
				return res.sendStatus(500);
			}

			res.sendStatus(204);
		});
	});
}

module.exports = {
	getSettings,
	updateSettings
};