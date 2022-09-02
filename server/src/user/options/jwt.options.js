const configHelper = require('../../shared/helpers/config.helper');

let signOptions = {
    expiresIn : configHelper.jwtExpiresIn
}

module.exports = {
    signOptions,
    jwtKey : configHelper.jwtKey,
    jwtRefreshkey : configHelper.jwtRefreshKey
};