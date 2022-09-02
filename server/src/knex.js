const { Model } = require('objection');
var config = require('../knexfile')

// Initialize knex.
const masterKnex = require('knex')(config);

async function checkDbConnection() {
 return masterKnex.raw('select 1+1 as result')
    .then((res)=>{
        console.log('Db connected..')
    }).catch((err) => {
        console.log('[Fatal] Failed to establish connection to database! Exiting...');
        console.log(err);
        process.exit(1);
    });
}

// Give the knex object to objection.
Model.knex(masterKnex);

module.exports = {
    masterKnex,
    Model,
    checkDbConnection,
}