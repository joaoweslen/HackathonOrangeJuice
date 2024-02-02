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

  const selializeUserData = {
    id: user[0].id, first_name: user[0].first_name, last_name: user[0].last_name, email: user[0].email 
  }

  const token = await generateToken(selializeUserData);

  return {token: token};
};

module.exports = {
  login,
};