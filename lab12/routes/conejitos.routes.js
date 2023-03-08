const express = require('express');
const router = express.Router();

const { respuestas } = require('./perritos.routes');

router.get('/conejitosgroup', (request, response, next) => {
  response.render('pets', { petType: 'Conejito', order: 3 });
});

router.post('/conejitosgroup', (request, response, next) => {
  const respuesta = request.body.conejito;
  respuestas.push(respuesta);
  response.redirect('/results');
});

module.exports = router;
