const express = require('express');
const next = require('next');

const port = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const showRoutes = require('./routes/index.js');

    // API startpoint
    server.use('/api', showRoutes);

    // Standard API. Use above and above file for actual routes.
    // REMOVE FOR PRODUCTION
    server.get('/api/parts', (req, res) => {
      console.log('api hit');
      res.send({ express_says: 'Hello' });
    });

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
