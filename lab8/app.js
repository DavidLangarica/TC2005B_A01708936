const filesystem = require('fs');
const http = require('http');
const path = require('path');

// Ejercicio 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Ejercicio1(array) {
  let suma = 0;
  let promedio = 0;

  array.forEach((element) => {
    suma += element;
  });

  promedio = suma / array.length;

  console.log(`El promedio del arreglo es: ${promedio}`);
}

Ejercicio1(array);

// Ejercicio 2
const string = 'Hola mundo';

function Ejercicio2(string) {
  filesystem.writeFileSync('./lab8/ejercicio2.txt', string);
}

Ejercicio2(string);

// Ejercicio 3
// Se recibe un número y se regresa el factorial del mismo haciendo uso de recursión.
function Factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
}
const num = 5;
console.log(`El factorial de ${num} es: ${Factorial(num)}`);

// Petición al servidor que devuelve el lab6
// Basado en el tutorial por Sabour, A. (2019). https://www.youtube.com/watch?v=Z8luwidomRA para retornar los archivos css y js con el html.
const server = http.createServer((request, response) => {
  let filePath = './lab6' + request.url;
  if (filePath == './lab6/') filePath = './lab6/index.html';
  let extension = path.extname(filePath);
  let contentType;

  switch (extension) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  filesystem.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('No se encontró la página');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data, 'utf-8');
      response.end();
    }
  });
});

server.listen(8000);
