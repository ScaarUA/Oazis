const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
require('./getEnv');

module.exports = (env = {}) => ({
	mode: env.mode || 'development',
	target: 'node',
	entry: './src/server.jsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: ['raw-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['fe-server']),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				BROWSER: JSON.stringify(false)
			},
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			_features: path.resolve(__dirname, 'src/features/'),
			_scenes: path.resolve(__dirname, 'src/scenes/'),
			_components: path.resolve(__dirname, 'src/components/'),
			_gates: path.resolve(__dirname, 'src/gates/'),
		}
	},
	output: {
		path: __dirname + '/fe-server',
		publicPath: '/',
		filename: 'index.js',
		library: 'ssr',
		libraryTarget: 'commonjs2',
		libraryExport: 'default'
	},
	node: {
		console: true,
		global: true,
		process: true,
		__filename: 'mock',
		__dirname: 'mock'
	}
});