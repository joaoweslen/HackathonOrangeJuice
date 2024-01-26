const loginService = require('../services/loginService');

const errorMessage = { status: 400, message: 'Not found email or passaword' };

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw errorMessage;
  const token = await loginService.login(email, password);
  res.status(200).json({ token });
};

module.exports = {
  loginController,
};