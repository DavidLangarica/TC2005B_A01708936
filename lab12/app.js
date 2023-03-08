const express = require('express');
const app = express();
const path = require('path');
const filesystem = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/inicio', (request, response, next) => {
  response.render('index');
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
  if (respuestas.length > 0) {
  response.render('results', { respuestas: respuestas });
  } else {
    response.redirect('/inicio');
  }
});

app.use((request, response, next) => {
  response.status(404);
  response.render('404');
});

app.listen(8000, () => {
  console.log('Servidor iniciado en http://localhost:8000');
});
