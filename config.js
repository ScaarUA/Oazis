const path = require('path');
const argv = require('yargs').argv;
const root = __dirname;

module.exports = {
	paths: {
		root,
		frontEnd: path.resolve(root, 'dist'),
		server: path.resolve(root, 'server'),
		assets: path.resolve(root, 'assets')
	},
	serverPort: argv.port || process.env.PORT || 8080,
	dbAddress: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds259912.mlab.com:59912/oazis-food`,
	sessionKey: 'user_sid'
};