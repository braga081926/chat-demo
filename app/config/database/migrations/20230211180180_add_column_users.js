export function up(knex) {
    return knex.schema
        .createTable('users', (t) => {
            t.increments('id')
            t.string('name')
        })
}

export function down(knex) { }