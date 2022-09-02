
const filterUserResponse = async(user,token,refresh_token) => {
    return {
        id : user.id,
        username : user.username,
        email : user.email,
        token,
        refresh_token,
        createdAt : user.createdAt,
        updatedAt : user.updatedAt,
  
    };
};

const filterProfileResponse = async(user) => {
    return {
        id : user.id,
        username : user.username,
        email : user.email,
        status : user.status,
        createdAt : user.createdAt,
        updatedAt : user.updatedAt
    };
}

module.exports = {
    filterUserResponse,
    filterProfileResponse
};