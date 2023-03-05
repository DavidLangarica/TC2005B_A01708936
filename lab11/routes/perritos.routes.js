const express = require('express');
const perritosRoute = express.Router();

const respuestas = [];

perritosRoute.get('/perrosgroup', (request, response, next) => {
  let html = `
        <h1>Empecemos con los perritos</h1>
        <p>A continuación verás 4 imágenes de perritos. Después, en el formulario debajo de las imágenes, podrás ingresar tu perrito favorito</p>
        <div style="display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 50vw;">

        <div>
        <h2>Perrito 1</h2>
        <img style="width: 300px;" src="/perrito1.jpg" alt="perrito 1">
        </div>

        <div>
        <h2>Perrito 2</h2>
        <img style="width: 300px;" src="/perrito2.jpg" alt="perrito 2">
        </div>

        <div>
        <h2>Perrito 3</h2>
        <img style="width: 300px;" src="/perrito3.jpg" alt="perrito 3">
        </div>

        <div>
        <h2>Perrito 4</h2>
        <img style="width: 300px;" src="/perrito4.jpg" alt="perrito 4">
        </div>

        </div>
        <br><br><br>
        
        <h3>¿Cuál es tu perrito favorito?</h3>
        <form method="post" action="/animales/perrosgroup">
        <input type="radio" id="perrito1" name="perrito" value="perrito1" checked>
        <label for="perrito1">Perrito 1</label>
        <br>
        <input type="radio" id="perrito2" name="perrito" value="perrito2">
        <label for="perrito2">Perrito 2</label>
        <br>
        <input type="radio" id="perrito3" name="perrito" value="perrito3">
        <label for="perrito3">Perrito 3</label>
        <br>
        <input type="radio" id="perrito4" name="perrito" value="perrito4">
        <label for="perrito4">Perrito 4</label>
        <br><br>
        <button type="submit">Registrar respuesta e ir al siguiente grupo</button>
        </form>
        `;

  response.send(html);
});

perritosRoute.post('/perrosgroup', (request, response, next) => {
  const respuesta = request.body.perrito;
  respuestas.push(respuesta);
  response.redirect('/animales/gatosgroup');
});

module.exports = { perritosRoute, respuestas };
