const sitemap = require('express-sitemap');

module.exports = app => {
	const map = sitemap({
		http: 'https',
		url: 'oazis-food.com',
		map: {
			'?language=ua': ['get'],
			'/menu?language=ua': ['get'],
		},
		route: {
			'/': {
				alternatepages: [{
					rel: 'alternate',
					hreflang: 'uk-ua',
					href: 'https://oazis-food.com/?language=ua'
				}, {
					rel: 'alternate',
					hreflang: 'ru-ru',
					href: 'https://oazis-food.com/?language=ru'
				}]
			},
			'/menu': {
				alternatepages: [{
					rel: 'alternate',
					hreflang: 'uk-ua',
					href: 'https://oazis-food.com/menu?language=ua'
				}, {
					rel: 'alternate',
					hreflang: 'ru-ru',
					href: 'https://oazis-food.com/menu?language=ru'
				}]
			},
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