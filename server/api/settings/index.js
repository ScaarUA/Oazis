const express = require('express');
const settingsRouter = express.Router();
const {getSettings, updateSettings} = require('./settingsControllers');
const {checkLogin} = require('../../auth/authControllers');

settingsRouter.get('/', getSettings);
settingsRouter.put('/', checkLogin, updateSettings);

module.exports = settingsRouter;