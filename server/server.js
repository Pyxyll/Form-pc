const express = require('express')
const next = require('next')

const port = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.prepare().then(() => {
   const server = express()

   server.get('/api/parts/gpu', (req, res) => {
      console.log("server")
      res.send({express_says: "Hello"});
   })
   
   //   server.get('/b', (req, res) => {
   //     return app.render(req, res, '/b', req.query)
   //   })

   server.all('*', (req, res) => {
      return handle(req, res)
   })

   server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
   })
})