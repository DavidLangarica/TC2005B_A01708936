const express = require('express');
const app = express();
const filesystem = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/inicio', (request, response, next) => {
  let html = `
  <h1>Inicio</h1>
  <p>Te voy a presentar una serie de imágenes de distintos tipos de animales, deberás escogerás cual es tu favorito de cada grupo</p>
  <a href="/animales/perrosgroup"><button>Empezar</button></a>
  `;
  response.send(html);
});

const {
  perritosRoute,
  respuestas,
} = require('./routes/perritos.routes');
const gatitosRoute = require('./routes/gatitos.routes');
const conejitosRoute = require('./routes/conejitos.routes');

app.use('/animales', perritosRoute);
app.use('/animales', gatitosRoute);
app.use('/animales', conejitosRoute);

app.get('/results', (request, response, next) => {
  if (respuestas.length === 3) {
    let content = `
    <<<<<<<<<<<<<<<<<<<<<<<
    Datos de la sesión.
  
    Perrito preferido: ${respuestas[0].toUpperCase()}.
    Gatito preferido: ${respuestas[1].toUpperCase()}.
    Conejito preferido: ${respuestas[2].toUpperCase()}.
    
    <<<<<<<<<<<<<<<<<<<<<<< 

    Pregunta de la actividad: Describe el archivo package.json

    Respuesta: Es el archivo en donde se recopilan datos relevantes de un proyecto, como lo pueden ser detalles e información, scripts o (una de las cosas más importantes) las dependencias y paquetes instalados para tenerlos como registro.
  `;
    filesystem.writeFileSync('./lab11.txt', content);

    let html = `
    <h1>Resultados</h1>
    <p>Estas fueron tus imágenes preferidas para cada grupo:</p>
    <div style="display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      width: 50vw;"
    >
    <div>
    <h2>Perritos</h2>
    <img style="width:400px;" src="/${respuestas[0]}.jpg" alt="${respuestas[0]}">
    </div>
  
    <div>
    <h2>Gatitos</h2>
    <img style="width:400px;" src="/${respuestas[1]}.jpg" alt="${respuestas[1]}">
    </div>
  
    <div>
    <h2>Conejitos</h2>
    <img style="width:400px;" src="/${respuestas[2]}.jpg" alt="${respuestas[2]}">
    </div>
    </div>
    <a href="/inicio"><button>Volver a inicio</button></a>
    `;
    response.send(html);
  } else {
    response.redirect('/inicio');
  }
});

app.use((request, response, next) => {
  response.status(404);
  let html = `
  <h1>Error 404</h1>
  <p>La ruta especificada no existe</p>
  <p>¿Estás intentando ir a inicio?</p>
  <a href="/inicio"><button>Ir a inicio</button></a>
  `;
  response.send(html);
});

app.listen(8000, () => {
  console.log('Servidor iniciado en http://localhost:8000');
});
