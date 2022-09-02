const dotenv = require('dotenv'); //pkg to manage env vars

dotenv.config();//init env vars from .env file

const configData = {

    env : process.env.NODE_ENV,
    port : process.env.PORT,

    //jwt config
    jwtKey : process.env.JWT_KEY,
    jwtRefreshKey : process.env.JWT_REFRESH_KEY,
    jwtExpiresIn : process.env.JWT_EXPIRES_IN,
    jwtExpiresHours : process.env.JWT_EXPIRES_HOUR,

    //api path
    apiPath : process.env.API_PATH,
    apiVersion : process.env.API_VERSION,
    
    //postgres
    postgresUser : process.env.POSTGRES_USER,
    postgresPassword : process.env.POSTGRES_PASSWORD,
    postgresHost : process.env.POSTGRES_HOST,
    postgresPort : process.env.POSTGRES_PORT,
    postgresDb : process.env.POSTGRES_DB,


}

module.exports = configData;