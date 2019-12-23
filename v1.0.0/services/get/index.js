'use strict'
const path = require('path');
const fs = require('fs')

module.exports = async function (fastify) {
  fastify.get('/beats/:name', async function (request,reply) {
    //101 State Change
    const pathLink = path.join(__dirname,'..','..','storage','mp3',`${request.params.name}.mp3`)
    fs.readFile(pathLink, function(err,fileBuffer) {
      //console.log(fileBuffer)
      if (err){
        console.log(err)
      }else {
        reply.header('Content-Type','audio/mpeg')
            .code(200)
            .send(fileBuffer)
      }
    })
  })
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
