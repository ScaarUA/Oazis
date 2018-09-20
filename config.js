const path = require('path');
const argv = require('yargs').argv;
const dotEnv = require('dotenv');

const root = __dirname;
dotEnv.config({
	path: path.resolve(root, '.env')
});

module.exports = {
	paths: {
		root,
		frontEnd: path.resolve(root, 'dist'),
		assets: path.resolve(root, 'assets')
	},
	serverPort: argv.port || process.env.PORT || 8080,
	dbAddress: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds259912.mlab.com:59912/oazis-food`
};