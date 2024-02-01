const loginService = require('../services/loginService');

const errorMessage = { status: 400, message: 'Not found email or passaword' };

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw errorMessage;
  const responseService = await loginService.login(email, password);
  //console.log(responseService)
  res.status(200).json(responseService);
};

module.exports = {
  loginController,
};