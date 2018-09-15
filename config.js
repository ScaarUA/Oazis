const path = require('path');
const argv = require('yargs').argv;

const root = __dirname;

module.exports = {
	paths: {
		root,
		frontEnd: path.resolve(root, 'dist'),
		assets: path.resolve(root, 'assets')
	},
	serverPort: argv.port || process.env.PORT || 8080
};