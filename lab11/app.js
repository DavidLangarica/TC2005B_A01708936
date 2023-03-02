const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware: Capas de software intermedias que se ejecutan en toda la app
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/hola', (request, response, next) => {
  response.send('Respuesta de la ruta "/hola"');
});

const hockeyRoute = require('./routes/hockey.routes');

app.use('/hockey', hockeyRoute);

app.use((request, response, next) => {
  response.status(404);
  response.send('La ruta no existe'); //Manda la respuesta
});

app.listen(3000);
