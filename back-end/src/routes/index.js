const { Router } = require('express');
const loginRouter = require('./loginRouter');
const registerRouter = require("./registerRouter");
const portfolioRouter = require("./portfolioRouter");
const authenticacionToken = require('../middlewares/authenticacionToken');

const routes = Router();

routes.use('/login', loginRouter);
routes.use("/register",registerRouter);
routes.use("/portfolio", portfolioRouter);

module.exports = routes;