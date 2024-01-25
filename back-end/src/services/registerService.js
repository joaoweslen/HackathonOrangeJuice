const Users = require('../models/usersModel');
const errorMessage = { status: 403, message: 'Token not found' };

const registerService = async (data) => {  
  const userExists = await Users.createUsers(data);
  if (!userExists) throw errorMessage;
  return userExists;
};

module.exports = {
    registerService,
};