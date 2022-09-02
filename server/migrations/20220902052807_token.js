/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('token', t => {
        t.increments('id').primary();
        t.integer('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE');;
        t.text('token');
        t.dateTime('created_at').notNull().defaultTo(knex.fn.now());
        t.dateTime('expires_at').nullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('token');
};
