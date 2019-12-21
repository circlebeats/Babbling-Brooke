'use strict'

const fp = require('fastify-plugin')
const fs = require('fs')
const pump = require('pump')


module.exports = fp(async function (fastify, opts, next) {
  fastify.decorateRequest('uploading', function (req,dest) {
    const mp = req.multipart(handler, onEnd)
    mp.on('field', function (key, value) {
      console.log('form-data', key, value)
    })
  })
  next()
})




