import dotenv from 'dotenv'
import http from 'node:http'
import express from 'express'

import routes from './config/routes.js'
import database from './config/database/database.js'

dotenv.config()

const app = express()

const server = http.createServer(app)

routes(app, database)

function startServer() {
    server.listen(process.env.PORT, () => {
        console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/`)
    })
}

export { startServer, server, app, database }