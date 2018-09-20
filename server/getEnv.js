'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config');

const dotEnvExists = fs.existsSync(path.resolve(config.paths.root, '.env'));
if (dotEnvExists) {
	console.log('getEnv.js: .env exists, probably running on development environment');
	process.exit()
}

const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
	projectId: 'affable-audio-118621'
});
const bucketName = 'affable-audio-118621.appspot.com';

console.log(`Downloading .env from bucket "${bucketName}"`);

storage
	.bucket(bucketName)
	.file('.env')
	.download({ destination: path.resolve(config.paths.root, '.env') })
	.then(() => {
		console.info('getEnv.js: .env downloaded successfully')
	})
	.catch(e => {
		console.error(`getEnv.js: There was an error: ${JSON.stringify(e, undefined, 2)}`)
	});