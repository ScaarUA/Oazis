require('../getEnv');
const path = require('path');
const config = require('../config');
const express = require('express');
const mongoose = require('mongoose');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const apiRouter = require('./api');
const authRouter = require('./auth');

mongoose.connect(config.dbAddress)
	.then(() => {
		console.log('Successfully connected to db');
	})
	.catch(error => console.log(error));
const app = express();

app.set('views', path.resolve(config.paths.server, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	keys: [config.sessionKey],
	secret: process.env.SESSION_SECRET,
	maxAge: 1000 * 60 * 60 // 1 hour
}));
app.use(express.static(config.paths.frontEnd));
app.use('/assets', express.static(config.paths.assets));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

require('./routes')(app);
require('./sitemap')(app);

app.listen(config.serverPort, () => console.log(`App is listening on port ${config.serverPort}`));