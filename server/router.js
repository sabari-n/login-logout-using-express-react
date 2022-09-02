const router = require('express').Router();//init router
const auth =require('./src/user/middleware/auth');

//import modular routers
router.use('/users',require('./src/user/user.router'));


//export all routes
module.exports = router;