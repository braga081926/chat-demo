
import health from '../routes/health.js'

export default (app, database) => {
    app.use('/api/v1/health', health)
}