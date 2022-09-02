const Joi = require('joi');

const validationSchema = Joi.object().keys({ 
    email : Joi.string().email().required().trim(),
    password : Joi.string().required().trim().min(7),
});

module.exports = {
    Joi,
    validationSchema
};