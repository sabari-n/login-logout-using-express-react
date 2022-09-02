//user controller
const validationOptions = require('../shared/options/joi.options');//validation options
// data validators
const registerValidator = require('./validators/user.register.validator');
const loginValidator = require('./validators/user.login.validator');
const refreshAuthTokenValidator = require('./validators/user.refresh.auth.token.validator');
//services
const registerService = require('./services/user.register.service');
const loginService = require('./services/user.login.service');
const refreshAuthTokenService = require('./services/user.refresh.auth.token.service');


/**
 * register (async)
 * @param {*} req 
 * @param {*} res 
 */
const register = async (req,res) => {
    let { error } = registerValidator.validationSchema.validate(req.body,validationOptions); //validate by passing register validation schema and req.body
    if(error){
        res.status(400).send(error.details);
    }else{
        try{
            const registeredUser = await registerService.execute(req.body);//register service
            res.status(201).send(registeredUser);
        }
        catch(error){
            res.status(500).send(error.message);
        }      
    }
   
}

/**
 * login (async)
 * @param {*} req 
 * @param {*} res 
 */
const login = async (req,res) => {
    let { error } = loginValidator.validationSchema.validate(req.body,validationOptions);//validate by passing login validation schema and req.body
    if(error){
        res.status(400).send(error.details);
    }else{
        try {
            const loggedInUser = await loginService.execute(req.body);
            res.status(200).send(loggedInUser);
        }catch(error){
            res.status(400).send(error.message);
        }
    }
}




/**
 * refreshAuthToken (async)
 * @param {*} req 
 * @param {*} res 
 */
const refreshAuthToken = async(req,res) => {
    let { error } = refreshAuthTokenValidator.validationSchema.validate(req.body,validationOptions);//validate by passing refreshAuthToken validation schema and req.body
    if(error){
        res.status(400).send(error.details);
    }
    else{
        try {
            const refreshedAuthToken = await refreshAuthTokenService.execute(req.body);
            res.status(200).send(refreshedAuthToken);
        }catch(error){
            res.status(400).send(error.message);
        }
    }

}



//export usercontroller methods
module.exports = {
    register,
    login,
    refreshAuthToken,
}
