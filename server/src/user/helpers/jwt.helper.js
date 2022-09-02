const jwt = require('jsonwebtoken');
const jwtOptions = require('../options/jwt.options');

const generateToken =  (signData) => {
    try{
        return jwt.sign(signData,jwtOptions.jwtKey,jwtOptions.signOptions);
    }catch(error){
        console.log(error);
        throw Error("Unable to generate token");
    }
   
}

const generateRefreshToken =  (signData) => {
    try{
        return jwt.sign(signData,jwtOptions.jwtRefreshkey);
    }catch(error){
        console.log(error);
        throw Error("Unable to generate refresh token");
    }
    
}

const verifyToken =  (token) => {
    try{
        return jwt.verify(token,jwtOptions.jwtKey);
    }catch(error){
        console.log(error);
        throw Error("Expired/Invalid token");
    }
    
}

const verifyRefreshToken =  (refresh_token) => {
    try{
        return jwt.verify(refresh_token,jwtOptions.jwtRefreshkey);
    }catch(error){
        console.log(error);
        throw Error("Failed to verify refresh token");
    }
    
}

module.exports = {
    generateToken,
    generateRefreshToken,
    verifyToken,
    verifyRefreshToken
}