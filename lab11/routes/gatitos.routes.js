const express = require('express');
const router = express.Router();

const { respuestas } = require('./perritos.routes');

router.get('/gatosgroup', (request, response, next) => {
  let html = `
        <h1>Ahora siguen los gatitos</h1>
        <p>A continuación verás 4 imágenes de gatitos. Después, en el formulario debajo de las imágenes, podrás ingresar tu gatito favorito.</p>
        
        <div style="display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 50vw;">

        <div>
        <h2>Gatito 1</h2>
        <img style="width: 300px;" src="/gatito1.jpg" alt="gatito 1">
        </div>

        <div>
        <h2>Gatito 2</h2>
        <img style="width: 300px;" src="/gatito2.jpg" alt="gatito 2">
        </div>

        <div>
        <h2>Gatito 3</h2>
        <img style="width: 300px;" src="/gatito3.jpg" alt="gatito 3">
        </div>

        <div>
        <h2>Gatito 4</h2>
        <img style="width: 300px;" src="/gatito4.jpg" alt="gatito 4">
        </div>

        </div>
        <br><br><br>
        
        <h3>¿Cuál es tu gatito favorito?</h3>
        <form method="post" action="/animales/gatosgroup">
        <input type="radio" id="gatito1" name="gatito" value="gatito1" checked>
        <label for="gatito1">Gatito 1</label>
        <br>
        <input type="radio" id="gatito2" name="gatito" value="gatito2">
        <label for="gatito2">Gatito 2</label>
        <br>
        <input type="radio" id="gatito3" name="gatito" value="gatito3">
        <label for="gatito3">Gatito 3</label>
        <br>
        <input type="radio" id="gatito4" name="gatito" value="gatito4">
        <label for="gatito4">Gatito 4</label>
        <br><br>
        <button type="submit">Registrar respuesta e ir al siguiente grupo</button>
        </form>
        `;
  response.send(html);
});

router.post('/gatosgroup', (request, response, next) => {
  const respuesta = request.body.gatito;
  respuestas.push(respuesta);
  response.redirect('/animales/conejosgroup');
});

module.exports = router;
