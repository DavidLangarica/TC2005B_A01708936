const express = require('express');
const router = express.Router();

router.use('/results', (request, response, next) => {
  let html = `
        <h1>Resultados</h1>
        <p>A continuación verás 4 imágenes de conejitos. Después, en el formulario debajo de las imágenes, podrás ingresar tu conejito favorito.</p>
        `;
  response.send(html);
});

module.exports = router;
