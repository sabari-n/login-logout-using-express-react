const UserModel = require('../user.model');
const bcryptHelper = require('../helpers/bcrypt.helper');
const filterUserData = require('../helpers/filter.user.data.helper').filterUserResponse;
const tokenHelper = require('../helpers/token.helper');



const execute = async (data) => {
    try{
        if(await UserModel.isEmailUnique(data.email)){ //check for duplicate emails
            const toSendPass = data.password;
            data.password = await generatePasswordHash(data.password);
            const user = await UserModel.query().insert(data).returning('*');//returning(*) can return data in single query for postgres
            return handleRegistration(user,toSendPass); 
        }else{
            throw Error('Email already exists!');
        } 
    }catch(error){
        throw Error(error.message);
    }  
}

const generatePasswordHash = async(passwordString) => {
    return bcryptHelper.hashPassword(passwordString);
}

const handleRegistration = async(user) => {
    let { token, refresh_token } = await tokenHelper.generateTokens(user);
    return filterUserData(user,token,refresh_token);  
}

module.exports = {
    execute,
};