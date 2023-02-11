export function up(knex) {
    return knex.schema
        .createTable('source', (t) => {
            t.increments('id')
            t.string('description').unique().notNullable()
        })
}

export function down(knex) { }