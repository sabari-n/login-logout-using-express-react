const TokenModel = require('../token.model');
const RefreshTokenModel = require('../refresh.token.model');
const jwtHelper = require('./jwt.helper');
const dateHelper = require('../../shared/helpers/date.helper');
const configHelper = require('../../shared/helpers/config.helper');

const generateTokens = async(user) => {
    try{
        const token = jwtHelper.generateToken({id: user.id});
        const refresh_token = jwtHelper.generateRefreshToken({id: user.id});
 
        const tokenData = {
            user_id : user.id,
            token,
            created_at : dateHelper.getTimeStamps().createdAt,
            expires_at : dateHelper.getAddedHours(configHelper.jwtExpiresHours)
        };

        const refreshTokenData = {
            user_id : user.id,
            refresh_token,
            created_at : dateHelper.getTimeStamps().createdAt
        }

        await TokenModel.query().insert(tokenData);
        await RefreshTokenModel.query().insert(refreshTokenData);
   
        return {
            token,
            refresh_token
        }
    }catch(error){
        throw new Error(error.message);
    }
};

const generateNewAuthToken = async(user_id) => {
    try{
        const token = jwtHelper.generateToken({id: user_id});
        
        const tokenData = {
            user_id,
            token,
            created_at : dateHelper.getTimeStamps().createdAt,
            expires_at : dateHelper.getAddedHours(configHelper.jwtExpiresHours)
        };

        await TokenModel.query().insert(tokenData)
        return token;
    }catch(error){
        throw new Error(error.message);
    }
}

module.exports = {
    generateTokens,
    generateNewAuthToken
}