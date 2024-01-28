const Users  = require('../models/usersModel');
const encriptPassword = require('../helpers/encriptPassword');
const generateToken = require('../helpers/generateToken');

const errorMessage = { status: 404, message: 'Not found' };

const login = async (email, password) => {
  const user = await Users.findOne(email);
  console.log(!user);
  if (!user) throw errorMessage;
  const passwordHash = encriptPassword(password);
  console.log(passwordHash)
  if (passwordHash !== user.password) throw errorMessage;

  const token = generateToken({ id: user.id, name: user.fist_name, email: user.email });

  return token;
};

module.exports = {
  login,
};