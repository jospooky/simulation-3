exports.up = function (knex, Promise) {
	return knex.schema.createTable('users', (t) => {
		t.increments('id').primary();
		t.string('username', 20)
		t.string('password', 60)
		t.text('profile_pic')
		t.unique('username')
	})
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('users')
};