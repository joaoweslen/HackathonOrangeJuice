const Users = require('../models/usersModel');

const loginValidate = async (data) => {  
  const errorMessage = { status: 403, message: 'Token not found' };
  const userExists = await Users.findById(data.id);
  if (!userExists) throw errorMessage;
  return {
    id: userExists.id,
    first_name: userExists.first_name,
    last_name: userExists.last_name,
    email: userExists.email,
  };
};

module.exports = {
  loginValidate,
};