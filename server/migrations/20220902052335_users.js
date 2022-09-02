/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id').primary()
        t.string('username'),
        t.string('email').unique()
        t.string('password')
        t.dateTime('created_at').notNull().defaultTo(knex.fn.now());
        t.dateTime('updated_at').nullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
