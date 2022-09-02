const Joi = require('joi');

const validationSchema = Joi.object().keys({
    username : Joi.string().required().trim(),
    email : Joi.string().email().required().trim(),
    password : Joi.string().required().min(7),
});

module.exports = {
    Joi,
    validationSchema
};