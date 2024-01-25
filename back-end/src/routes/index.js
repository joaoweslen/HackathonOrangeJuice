const { Router } = require('express');
const loginRouter = require('./loginRouter');
const registerRouter = require("./registerRouter");

const routes = Router();

routes.use('/login', loginRouter);
routes.use("/register", registerRouter);

module.exports = routes;