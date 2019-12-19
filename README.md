![Screenshot](brooke.png)
# Babbling Brooke
## Official circlebeats.com  Aduio Streaming Server
`npm install && npm start`

### API
#### Get all Beats
```javascript
  fastify.get('/beatsFull', async (request,reply)=>{
    await connection.query('SELECT fid, title, producer, plays, bpm, userTag1, userTag2, filterTag1, filterTag2, url,genre FROM trakz', function (error, results, fields) {
      if (error) {
        console.log(error)
      }else {
        console.log(results)
        reply.send(results, fields)
        //connection.end();
      }
    });
  })
```

### Changelog
v01. Init 
