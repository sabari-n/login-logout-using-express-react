const bcrypt = require('bcryptjs');

const hashPassword = async (passwordString) => {
    try{
        return bcrypt.hash(passwordString,10);
    }catch(error){
        console.log(error);
        throw Error("Hash Error");
    }
    
}

const comparePassword = async (passwordString,passwordHash) => {
    try{
        return bcrypt.compare(passwordString,passwordHash);
    }catch(error){
        console.log(error);
        throw Error("Compare hash Error");
    }
   
}

module.exports = {
    hashPassword,
    comparePassword
};