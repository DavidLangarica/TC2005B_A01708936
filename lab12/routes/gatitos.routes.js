const express = require('express');
const router = express.Router();

const { respuestas } = require('./perritos.routes');

router.get('/gatitosgroup', (request, response, next) => {
  response.render('pets', { petType: 'Gatito', order: 2 });
});

router.post('/gatitosgroup', (request, response, next) => {
  const respuesta = request.body.gatito;
  respuestas.push(respuesta);
  response.redirect('/animales/conejitosgroup');
});

module.exports = router;
