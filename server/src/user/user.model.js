const { Model } = require('../knex');

class UserModel extends Model{
    static get tableName(){
        return 'users';
    }

    static get idColumn(){
        return 'id';
    }

    static async isEmailUnique(email) {
        var countRes = await this.query()
            .where('email', email)
            .count('id').first();
        
        return (countRes.count > 0) ? false : true; //returns false if email already exists
    }

    static get relationMappings(){
       
        return {
            tokens : {
                relation : Model.HasManyRelation,
                modelClass : require('./token.model'),
                join : {
                    from : 'users.id',
                    to : 'token.userId'
                }
            },
            refreshTokens : {
                relation : Model.HasManyRelation,
                modelClass : require('./refresh.token.model'),
                join : {
                    from : 'user_id.id',
                    to : 'refresh_token.user_id'
                }
            },
       

        }
    }
}

module.exports = UserModel;