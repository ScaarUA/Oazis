const express = require('express');
const apiRouter = express.Router();
const menuRouter = require('./menu');
const settinsRouter = require('./settings');

apiRouter.use('/menu', menuRouter);
apiRouter.use('/settings', settinsRouter);

module.exports = apiRouter;