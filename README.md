![Screenshot](brooke.png)
# Babbling Brooke
## Official circlebeats.com  Aduio Streaming Server
```
git  clone 
npm install && npm start
```

### API
#### Get all Beats
```javascript
  fastify.get('/beats/:name', async (request,reply)=>{
    const pathLink = path.join('/*add your servers url here*/',__dirname,'..','storage','mp3',`${request.params.name}.mp3`)
    //const stream = fs.createReadStream(pathLink, 'base64')
    fs.readFile(pathLink, function(err,fileBuffer) {
      console.log(fileBuffer)
      reply.header('Content-Type','audio/mpeg')
        .send(fileBuffer)
        .code(200)
    })
  })
```

### Changelog
v01. Init 
