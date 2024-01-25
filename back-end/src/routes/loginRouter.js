const { Router } = require('express');

const loginController = require('../controllers/loginController');
const loginValidateController = require("../controllers/loginValidateController")
const authenticacionToken = require('../middlewares/authenticacionToken');

const loginRouter = Router();

loginRouter.post('/', loginController.loginController);
loginRouter.get('/validate', authenticacionToken, loginValidateController);

module.exports = loginRouter;