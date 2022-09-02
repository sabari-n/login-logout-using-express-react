const configData = require('./src/shared/helpers/config.helper');


module.exports = {
    client: 'postgresql',
    connection : {
      user : configData.postgresUser,
      password : configData.postgresPassword,
      host : configData.postgresHost,
      port : configData.postgresPort,
      database : configData.postgresDb
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    // getKnexConfig
}