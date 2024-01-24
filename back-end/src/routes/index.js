const { Router } = require('express');
const loginRouter = require('./loginRouter');

const routes = Router();

routes.use('/login', loginRouter);

module.exports = routes;