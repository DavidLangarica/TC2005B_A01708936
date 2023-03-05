const express = require('express');
const router = express.Router();

const { respuestas } = require('./perritos.routes');

router.get('/conejosgroup', (request, response, next) => {
  let html = `
        <h1>Por útltimo los conejitos</h1>
        <p>A continuación verás 4 imágenes de conejitos. Después, en el formulario debajo de las imágenes, podrás ingresar tu conejito favorito.</p>
        
        <div style="display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 50vw;">

        <div>
        <h2>Conejito 1</h2>
        <img style="width: 300px;" src="/conejito1.jpg" alt="conejito 1">
        </div>

        <div>
        <h2>Conejito 2</h2>
        <img style="width: 300px;" src="/conejito2.jpg" alt="conejito 2">
        </div>

        <div>
        <h2>Conejito 3</h2>
        <img style="width: 300px;" src="/conejito3.jpg" alt="conejito 3">
        </div>

        <div>
        <h2>Conejito 4</h2>
        <img style="width: 300px;" src="/conejito4.jpg" alt="conejito 4">
        </div>

        </div>
        <br><br><br>
        
        <h3>¿Cuál es tu conejito favorito?</h3>
        <form method="post" action="/animales/conejosgroup">
        <input type="radio" id="conejito1" name="conejito" value="conejito1" checked>
        <label for="gatito1">Conejito 1</label>
        <br>
        <input type="radio" id="conejito2" name="conejito" value="conejito2">
        <label for="conejito2">Conejito 2</label>
        <br>
        <input type="radio" id="conejito3" name="conejito" value="conejito3">
        <label for="conejito3">Conejito 3</label>
        <br>
        <input type="radio" id="conejito4" name="conejito" value="conejito4">
        <label for="conejito4">Conejito 4</label>
        <br><br>
        <button type="submit">Registrar respuesta y ver resultados</button>
        </form>
        `;
  response.send(html);
});

router.post('/conejosgroup', (request, response, next) => {
  const respuesta = request.body.conejito;
  respuestas.push(respuesta);
  response.redirect('/results');
});

module.exports = router;
