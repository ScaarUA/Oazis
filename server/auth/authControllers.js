const User = require('../models/User');
const config = require('../../config');

function loginUser(req, res) {
	const userName = req.body.name;
	const password = req.body.password;

	User.findOne({
		login: userName
	}).exec((err, user) => {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}

		if (!user || user.password !== password) {
			return res.sendStatus(401);
		} else {
			const userData = {
				login: user.login,
				name: user.name,
				surname: user.surname
			};

			req.session.user = userData;
			res.json(userData);
		}
	});
}

function logoutUser(req, res) {
	clearSession(req, res);

	res.sendStatus(200);
}

function restoreUser(req, res) {
	if (req.session.user) {
		res.json(req.session.user);
	} else {
		res.sendStatus(401);
	}
}

function clearSession(req) {
	req.session = null;
}

function checkLogin(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		clearSession(req);

		res.sendStatus(401);
	}
}

module.exports = {
	loginUser,
	logoutUser,
	restoreUser,
	clearSession,
	checkLogin
};