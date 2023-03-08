const express = require('express');
const perritosRoute = express.Router();

const respuestas = [];

perritosRoute.get('/perritosgroup', (request, response, next) => {
  response.render('pets', { petType: 'Perrito', order: 1 });
});

perritosRoute.post('/perritosgroup', (request, response, next) => {
  const respuesta = request.body.perrito;
  respuestas.push(respuesta);
  response.redirect('/animales/gatitosgroup');
});

module.exports = { perritosRoute, respuestas };
