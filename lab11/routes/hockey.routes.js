const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
  let html = `
    <form action="/hockey/nuevo" method="POST">
    <label for="jugador">Nombre del Jugador:</label>
    <input type="text" id="jugador" name="jugador">
    <button type="submit">Enviar</button>
    </form>
    `;

  response.send(html);
});

router.post('/nuevo', (request, response, next) => {
  // console.log(request.body);
  response.send(`El jugador es ${request.body.jugador}`);
});

module.exports = router;
