const getSSRContent = require('../fe-server');
const indexTranslations = require('./translations/index.json');
const menuTranslations = require('./translations/menu.json');

module.exports = app => {
	app.use((req, res, next) => {
		req.language = req.query.language || 'ru';
		next();
	});

	app.get('/', (req, res) => {
		res.render('index', {
			content: getSSRContent({
				location: '/',
				preloadedState: {
					language: req.language
				}
			}),
			pageInfo: indexTranslations[req.language]
		});
	});

	app.get('/menu', (req, res) => {
		res.render('index', {
			content: getSSRContent({
				location: '/menu',
				preloadedState: {
					language: req.language
				}
			}),
			pageInfo: menuTranslations[req.language]
		});
	});

	app.get('/login', (req, res) => {
		res.render('index', {
			content: getSSRContent({
				location: '/menu',
				preloadedState: {
					language: req.language
				}
			}),
			pageInfo: {}
		});
	});
};