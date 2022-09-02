//user module router
const userController = require('./user.controller');//user controller
const router = require('express').Router();//express router

//create user 
router.post('/',userController.register);
//login user 
router.post('/login',userController.login);
//refresh auth token using refreshToken
router.post('/refreshtoken',userController.refreshAuthToken);

module.exports = router; //exports user module routes