const path = require('path');
const config = require('../config');
console.log(config.dbAddress);
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(config.dbAddress)
	.then(() => {
		console.log('Successfully connected to db');
	})
	.catch(error => console.log(error));
const app = express();

app.use(express.static(config.paths.frontEnd));
app.use('/assets', express.static(config.paths.assets));

app.get('/', function(req, res) {
	res.sendFile(path.resolve(config.paths.frontEnd, 'index.html'));
});

app.listen(config.serverPort, () => console.log(`App is listening on port ${config.serverPort}`));