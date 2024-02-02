const Users = require('../models/usersModel');
const errorMessage = { status: 403, message: 'Token expired or invalid 1111' };

const loginValidate = async (Id) => {  
  console.log("service" +Id)
  const userExists = await Users.findById(Id);
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