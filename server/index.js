const express = require('express');
const path = require('path');
const config = require('../config');

const app = express();

app.use(express.static(config.paths.frontEnd));
app.use('/assets', express.static(config.paths.assets));

app.get('/', function(req, res) {
	res.sendFile(path.resolve(config.paths.frontEnd, 'index.html'));
});

app.listen(config.serverPort, () => console.log(`App is listening on port ${config.serverPort}`));