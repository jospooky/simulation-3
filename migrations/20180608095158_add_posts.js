exports.up = function (knex, Promise) {
	return knex.schema.createTable('posts', (t) => {
		t.increments('id').primary();
		t.string('title', 45)
		t.text('img', 50)
		t.text('content')
		t.integer('author_id').references('users.id')
	})
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('posts')
};