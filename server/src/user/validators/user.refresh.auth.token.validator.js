const Joi = require('joi');

const validationSchema = Joi.object().keys({ 
    refresh_token : Joi.string().required(),
});

module.exports = {
    Joi,
    validationSchema
};