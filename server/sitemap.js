const sitemap = require('express-sitemap');

module.exports = app => {
	const map = sitemap({
		http: 'https',
		url: 'oazis-food.com',
		route: {
			'/login': {
				disallow: true
			}
		},
		generate: app
	});
	app.get('/sitemap.xml', (req, res) => {
		map.XMLtoWeb(res);
	});
	app.get('/robots.txt', (req, res) => {
		map.TXTtoWeb(res);
	});
};