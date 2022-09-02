const UserModel = require('../user.model');
const filterUserData = require('../helpers/filter.user.data.helper').filterUserResponse;
const tokenHelper = require('../helpers/token.helper');
const bcryptHelper = require('../helpers/bcrypt.helper');

const execute = async (data) => {
    const { email, password } = data
    try{
        const user =  await UserModel.query().findOne({ email });
        if (user && user.id) {
            const match = await bcryptHelper.comparePassword(password, user.password);
            if (match) {
              let { token, refresh_token } = await tokenHelper.generateTokens(user);
              return filterUserData(user,token,refresh_token);
            } else {
              throw Error("Invalid login credentials");
            }
          } else {
            throw Error("User not found!");
          }
       
    }catch(error){
        throw Error(error.message);
    }
};

module.exports = {
    execute
};