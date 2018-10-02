const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const CleanWebpackPlugin = require('clean-webpack-plugin');
require('./getEnv');

function NullPlugin() {
	this.apply = function(){};
}

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: {
		bundle: './src/index.jsx'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
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
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',
						options: {
							paths: [
								path.resolve(__dirname, 'src/styles'),
								path.resolve(__dirname, 'node_modules')
							],
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		process.env.NODE_ENV === 'production' ? new NullPlugin() : new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ImageminPlugin({
			externalImages: {
				context: '',
				sources: glob.sync('assets/**/*.*')
			},
			pngquant: {
				quality: 8
			},
			plugins: [
				imageminJpegRecompress({
					quality: 'medium'
				})
			]
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				BROWSER: JSON.stringify(true)
			}
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
		path: __dirname + '/dist',
		publicPath: '/',
		filename: '[name].js'
	},
	devServer: {
		contentBase: __dirname,
		hot: true,
		port: 8081,
		proxy: [{
			context: ['/auth', '/api'],
			target: 'http://localhost:8080',
		}],
		historyApiFallback: true
	}
};