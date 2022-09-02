//Tokenmodel
const { Model } = require('../knex');

class TokenModel extends Model{
    static get tableName(){
        return 'token';
    }

    static get relationMappings(){
        const UserModel = require('./user.model')

        return {
            user : {
                relation : Model.BelongsToOneRelation,
                modelClass : UserModel,
                join : {
                    from : 'token.user_id',
                    to : 'users.id'
                }
            }

        }
    }
}

module.exports = TokenModel;