const http = require('http');
const filesystem = require('fs');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Pagina Principal</title>
      </head>
      <body>
        <h1>¡Bienvenido!</h1>
        <p>Inicia sesión para continuar</p>
        <a href="/iniciar-sesion"><button>Ir a iniciar sesión</button></a>
      </body>
    </html>
    `);
    response.end();
  } else if (
    request.url === '/iniciar-sesion' &&
    request.method === 'GET'
  ) {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Pagina Principal</title>
      </head>
      <body>
        <h1>Inicia sesión para continuar</h1>
        <form action="/iniciar-sesion" method="POST">
          <fieldset>
            <legend>Ingresa tus datos</legend>
            <label>
            Usuario
            <br>
              <input type="text" id="username" required placeholder="Ingresa tu usuario" name="usuario"/>
            </label>
            <br><br>
            <label>
            Contraseña
            <br>
              <input
                type="Password"
                required
                placeholder="Ingresa tu contraseña"
              />
            </label>
            <br><br>
            <button type="submit">Iniciar sesión</button>
          </fieldset>
        </form>
      </body>
    </html>
    `);

    response.end();
  } else if (
    request.url === '/iniciar-sesion' &&
    request.method === 'POST'
  ) {
    const datos = [];
    request.on('data', (dato) => {
      datos.push(dato);
    });
    return request.on('end', () => {
      const datos_completos = Buffer.concat(datos).toString();
      const username = datos_completos.split('=')[1];

      if (username) {
        let date = new Date();
        let day =
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear();
        let clock =
          date.getHours() +
          ':' +
          date.getMinutes() +
          ':' +
          date.getSeconds();

        filesystem.writeFileSync(
          './lab10/lab10.txt',
          `
          <<<<<<<<<<<<<<<<<<<<<<<

          Datos de la sesión.

          Nombre de usuario: ${username}
          
          Log generado el ${day} a las ${clock}
          
          <<<<<<<<<<<<<<<<<<<<<<<
          `,
          () => {
            response.writeHead(200, {
              'Content-Type': 'text/plain',
            });
          }
        );
        response.setHeader('Content-Type', 'text/html');
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>${username} | Dashboard</title>
          </head>
          <body>
            <h1>Hola ${username}!</h1>
            <p>¡Qué alegría tenerte de vuelta!</p>
            <br>
            <a href="/video-awesome"><button>Ver una sorpresa</button></a>
            <br>
            <img
              src="https://images.pexels.com/photos/3612885/pexels-photo-3612885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="happy-faces"
            />
          </body>
        </html>
        `);
        response.end();
      }
    });
  } else if (request.url === '/video-awesome') {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Tu sorpresa</title>
      </head>
      <body>
        <h1>¡Sorpresa!</h1>
        <img src="https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif">
        <br><br>
        <a href="/"><button>Cerrar sesión</button></a>
      </body>
    </html>
    `);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>404 | Page not found</title>
      </head>
      <body>
        <h1>Error 404</h1>
        <p>Esta página no existe o se ha movido</p>
        <a href="/"><button>Volver a inicio</button></a>
      </body>
    </html>
    `);
    response.end();
  }
});

server.listen(8000, () => {
  console.log('Servidor iniciado en http://localhost:8000');
});
