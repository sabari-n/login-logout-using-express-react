
const RefreshTokenModel = require('../refresh.token.model');
const jwtHelper = require('../helpers/jwt.helper');
const tokenHelper = require('../helpers/token.helper');


const execute = async(data) => {
    let { refresh_token } = data;
    const token_data = jwtHelper.verifyRefreshToken(refresh_token);
    console.log('token_data',token_data)
    try{
        const user = await RefreshTokenModel.query().findOne({ user_id : token_data.id, 'refresh_token': refresh_token });
        if (!user) {
            throw Error('Invalid Refresh Token');
        }
        let refreshedAuthToken = await tokenHelper.generateNewAuthToken(token_data.id);
        return refreshedAuthToken;
    }catch(error){
        console.log(error);
        throw Error(error.message);
    }

}

module.exports = {
    execute
};
    
