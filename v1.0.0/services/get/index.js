'use strict'
const path = require('path');
const fs = require('fs')
//"FASTIFY-WEBSOCKET" IMPORT AND REGISTER

module.exports = async function (fastify) {
  fastify.register(require('fastify-websocket'))
  fastify.get('/beats/:name', async function (request,reply) {
    const pathLink = path.join(__dirname,'..','storage','mp3',`${request.params.name}.mp3`);
    // fs.readFile(pathLink, function(err,fileBuffer) {
    //   //console.log(fileBuffer)
    //   if (err){
    //     console.log(err)
    //   }else {
    //     reply.headers({'Content-Type':'audio/mpeg'},{'Accept-Ranges': 'bytes'})
    //         .code(200)
    //         .send(fileBuffer)
    //   }
    // })

  });
  fastify.get('/wsBeats/:name', { websocket: true }, (connection, req, params) => {
    const pathLink = path.join(__dirname,'..','storage','mp3',`${params.name}.mp3`);
    connection.socket.on('message', message => {
      // message === 'hi from client'
      console.log(message)
      if (message === 'emits'){
        const rStream = fs.createReadStream(pathLink)
        rStream.on('data', (chunk) => {
          connection.socket.send(chunk)
          console.log(chunk)
        })
        connection.socket.send('emitting other data')
      }
      connection.socket.send('hi from server')
    })

  })
};

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
