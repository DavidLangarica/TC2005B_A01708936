const express = require('express');
const router = express.Router();

const respuestas = [];

router.get('/perrosgroup', (request, response, next) => {
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

router.post('/perrosgroup', (request, response, next) => {
  const respuesta = request.body.perrito;
  respuestas.push(respuesta);
  response.redirect('/animales/gatosgroup');
});

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

module.exports = { router, respuestas };
