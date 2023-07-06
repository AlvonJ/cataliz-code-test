const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string()
    .required()
    .error(() => 'Name field is required as string'),
  author: Joi.string()
    .required()
    .error(() => 'Author field is required as string'),
  pages: Joi.number()
    .required()
    .error(() => 'Pages field is required and must be a number'),
  year: Joi.number()
    .required()
    .error(() => 'Year field is required and must be a number'),
});
