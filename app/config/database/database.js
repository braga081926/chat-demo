import knex from 'knex'
import dotenv from 'dotenv'

import knexfile from '../../../knexfile.js'

dotenv.config()

export default knex(knexfile)