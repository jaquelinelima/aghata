const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({ 
    success: true,
    message: 'Bem-vindo(a) a api Aghata',
    version: '1.0.0',
  })
})

module.exports = router;