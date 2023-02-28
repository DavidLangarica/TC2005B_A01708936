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

app.use('/nuevo', (request, response, next) => {
  console.log(request.body);
  let html = `
    <form action="nuevo" method="POST">
        <label for="jugador">Nombre del Jugador:</label>
        <input type="text" id="jugador" name="jugador">
        <button type="submit">Enviar</button>
    </form>
    `;

  response.send(html);
});

app.use((request, response, next) => {
  console.log('Otro middleware!');
  response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);
