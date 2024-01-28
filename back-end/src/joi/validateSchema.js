
module.exports = function validateSchema(listSales, schema) {
  const { error } = schema.validate(listSales);
  if (!error) return false;
  return error.details[0].message;
}