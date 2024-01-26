const Users  = require('../models/usersModel');
const encriptPassword = require('../helpers/encriptPassword');
const generateToken = require('../helpers/generateToken');

const errorMessage = { status: 404, message: 'Not found' };
const errorMessagePassword = { status: 403, message: 'user not autorization' };

const login = async (email, password) => {
  const user = await Users.findOne(email);
  
  if (!user.length) throw errorMessage;
  const passwordHash = encriptPassword(password);
  
  if (passwordHash !== user[0].password) throw errorMessagePassword;

  const token = generateToken({ id: user.id, name: user.fist_name, email: user.email });

  return token;
};

module.exports = {
  login,
};