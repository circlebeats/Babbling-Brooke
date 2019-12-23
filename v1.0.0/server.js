// Require the framework
const Fastify = require('fastify')

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
    pluginTimeout: 10000
})

// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen(3001, (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})