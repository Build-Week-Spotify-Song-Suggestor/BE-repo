
exports.up = function(knex) {
  return knex.schema.createTable('songs', tbl => {
      tbl.float('acousticness');
      tbl.string('artist');
      tbl.float('danceability');
      tbl.float('duration_ms');
      tbl.float('energy');
      tbl.float('id');
      tbl.float('instrumentalness');
      tbl.float('key');
      tbl.float('liveness');
      tbl.float('loudness');
      tbl.float('mode');
      tbl.float('popularity');
      tbl.float('speechiness');
      tbl.float('tempo');
      tbl.float('time_signature');
      tbl.string('track_id').notNullable().unique();
      tbl.string('track_name').notNullable().unique();
      tbl.float('valence');
      tbl.integer('user_id').unsigned().references('id').inTable('songs').onUpdate('CASCADE').onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
