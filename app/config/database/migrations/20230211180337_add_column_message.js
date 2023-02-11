export function up(knex) {
    return knex.schema
        .createTable('message', (t) => {
            t.increments('id')
            t.timestamp(true, true)
            t.string('source').notNullable()
            t.integer('users_id').notNullable().unsigned()
            t.integer('source_id').notNullable().unsigned()

            t.foreign('users_id').references('users.id')
            t.foreign('source_id').references('source.id')
        })
}

export function down(knex) { }
