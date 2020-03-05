exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username', 255)
            .notNullable()
            .unique();
        users.string('password', 255).notNullable();
        users.integer('song_id').unsigned().references('id').inTable('songs').onUpdate('CASCADE').onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
