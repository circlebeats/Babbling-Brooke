'use strict'


const AutoLoad = require('fastify-autoload')
const path = require('path');


module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  //"FASTIFY-REDIS" IMPORT, CONFIG AND REGISTER
  // fastify.register(require('fastify-redis'), {
  //   //TODO: Check redis IP
  //   host: '35.245.224.26',
  //   password: 'bvWp6SgWgv8H'
  // })


  //"FASTIFY-CORS" IMPORT AND REGISTER
  fastify.register(require('fastify-cors'), {
    // put your options here
    origin:  '*',
    methods: ['GET,PUT,POST'],
    exposedHeaders: ['Content-Range', 'X-Content-Range']
  })

  // "FASTIFY-MULTIPART" IMPORT AND REGISTER
  fastify.register(require('fastify-multipart'))

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts)
  })

  // Make sure to call next when done
  next()
}
