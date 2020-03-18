const express = require('express');
const router = express.Router();

router.get('/components', (req, res) => {
  console.log('API hit');
  res.send({ express_says: 'Hello_there_general' });
});

module.exports = router;
