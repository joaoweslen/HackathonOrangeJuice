const loginValidateService = require('../services/loginValidateService');

const loginValidateController = async (req, res) => {
  const { id } = req;
  //const { authorization } = req.headers;
  console.log("controller chegou")
  const dataUser = await loginValidateService.loginValidate(id);
  res.status(200).json({
    ...dataUser,
    // token: authorization 
  });
};

module.exports = loginValidateController;