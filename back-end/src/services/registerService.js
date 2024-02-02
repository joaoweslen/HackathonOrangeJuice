const Users = require('../models/usersModel');
const genereteToken = require("../helpers/generateToken");
const encriptPassword = require("../helpers/encriptPassword");
const joi = require("../joi");
const errorMessage = { status: 403, message: 'connection server error' };

const registerService = async (data) => {
  console.log("service");

  const bodyIsValid = joi.validateSchema(data, joi.registerSchema);
  if (bodyIsValid) throw { status: 403, message: bodyIsValid } 

  const passwordHash = encriptPassword(data.password);
  
  const userDataforRequestDB = {
    "first_name": data.first_name,
    "last_name": data.last_name,
    "email": data.email,
    "password":passwordHash
  }

  const userExists = await Users.createUsers(userDataforRequestDB);
  
  if (!userExists) throw errorMessage;
  
  const tokenUser = await genereteToken(userExists);
  
  const serializeUser = {  
    ...userExists,
  }
  //console.log(serializeUser, userExists);
  return serializeUser;
};

module.exports = {
    registerService,
};