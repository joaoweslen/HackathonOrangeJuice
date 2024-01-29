const Joi = require('joi');

const registerSchema = Joi.object({
  first_name: Joi.string().min(3).required(),
  last_name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// function validateTest(listSales, schema) {
//   const { error } = schema.validate(listSales);
//   if (!error) return false;
//   return error.details[0].message;
// }

// console.log(
//   validateTest(
//     {
//       first_name: 'eliel ',
//       last_name: 'lindo',
//       email: 'trybe@trybe.com',
//       password: '12346567',
//       a:"a"
//     },    
//     registerSchema,
// ),
// );

module.exports = registerSchema;