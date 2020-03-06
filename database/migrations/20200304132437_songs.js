
exports.up = function(knex) {
  return knex.schema.createTable('songs', tbl => {
      tbl.increments();
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
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
