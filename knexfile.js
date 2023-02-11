import dotenv from 'dotenv'

dotenv.config()

export default {
    client: 'postgresql',
    connection: {
        user: process.env.USER_DB,
        host: process.env.HOST_DB,
        database: process.env.NAME_DB,
        password: process.env.PASSWORD_DB
    },
    migrations: {
        directory: './app/config/database/migrations'
    },
    pool: { min: 0, max: 5 }

}