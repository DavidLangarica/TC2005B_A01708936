const Ejercicio1 = () => {
  let num = prompt('Ejercicio 1: Digite un número');

  document.write(
    '<table><thead><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr></thead><tbody>'
  );

  for (let i = 0; i <= num; i++) {
    let cuadrado = Math.pow(i, 2);
    let cubo = Math.pow(i, 3);

    document.write(
      `<tr><td> ${i} </td><td> ${cuadrado} </td><td> ${cubo} </td></tr>`
    );
  }

  document.write('</tbody></table>');

  return true;
};

const Ejercicio2 = () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);

  let suma = prompt(
    `Ejercicio 2: Digite el resultado de la suma de: ${a} + ${b}`
  );

  let sumaRes = a + b;

  let esCorrecto = suma == sumaRes ? 'correcto' : 'incorrecto';

  document.write(
    `<p> El resultado de <strong>${suma}</strong> ingresado es ${esCorrecto}! El resultado es: ${sumaRes}</p>`
  );

  return esCorrecto;
};

const Contador = (array) => {
  let negativos = 0;
  let positivos = 0;
  let ceros = 0;

  array.forEach((element) => {
    if (element === 0) {
      ceros++;
    } else if (element > 0) {
      positivos++;
    } else if (element < 0) {
      negativos++;
    }
  });

  document.write(`<p>Números positivos: ${positivos}</p>`);
  document.write(`<p>Ceros: ${ceros}</p>`);
  document.write(`<p>Números negativos: ${negativos}</p>`);

  return true;
};

const Promedios = (matrix) => {
  const arrayProm = [];
  let promTemp;
  let sumTemp;
  let numElements;

  matrix.map((array) => {
    numElements = 0;
    promTemp = 0;
    sumTemp = 0;
    array.forEach((num) => {
      numElements++;
      sumTemp += num;
    });
    promTemp = sumTemp / numElements;
    arrayProm.push(promTemp);
  });

  arrayProm.map((element, i) => {
    document.write(
      `<p>Promedio fila ${i}: ${Math.round(element * 100) / 100}</p>`
    );
  });

  return true;
};

const Inverso = (num) => {
  const nString = num.toString();
  let inverse = '';

  for (let i = nString.length - 1; i >= 0; i--) {
    inverse += nString[i];
  }

  document.write(`<p>Número invertido: ${parseInt(inverse)}</p>`);

  return true;
};

function Ejercicio6(array) {
  this.arrayNum = array;
  this.getPares = function () {
    let arrayPares = [];
    this.arrayNum.map((num) => {
      if (num % 2 === 0) {
        arrayPares.push(num);
      }
    });
    return arrayPares;
  };
  this.sumaPares = function () {
    let suma = 0;

    this.getPares().forEach((num) => {
      suma += num;
    });

    return suma;
  };
  this.show = function () {
    document.write(
      `<p>El arreglo evaluado es: [${this.arrayNum}]</p>`
    );
    document.write(
      `<p>El arreglo con los pares filtrados es: [${this.getPares()}]</p>`
    );
    document.write(
      `<p>El resultado de la suma de los pares es: ${this.sumaPares()}</p>`
    );
  };
}

document.write('<h2>Ejercicio 1</h2>');

console.assert(Ejercicio1(), 'La tabla no fue desplegada');

document.write('<h2>Ejercicio 2</h2>');

const start = Date.now();

console.assert(
  !Ejercicio2(),
  'El resultado de la suma fue incorrecto'
);

const end = Date.now();

const time = (end - start) / 1000;

document.write(
  `<p> El tiempo en registrar la respuesta fue de ${time} s</p>`
);

document.write('<h2>Ejercicio 3</h2>');

const array = [2, 3, 4, -2, 0];

document.write(`<p>Arreglo evaluado: ${array}</p>`);
console.assert(Contador(array), 'El arreglo no fue evaluado');

document.write('<h2>Ejercicio 4</h2>');

const matrix = [
  [0, 1, 2],
  [2, 2, 2],
  [2, 3, 2],
];

document.write('<p>Matriz a evaluar: </p>');

matrix.map((array, i) => {
  document.write(`<p>[${i}]: ${array}</p>`);
});

console.assert(Promedios(matrix), 'La función no fue evaluada');

document.write('<h2>Ejercicio 5</h2>');

const num = 1234;

document.write(`<p>Número a invertir: ${num}</p>`);

console.assert(Inverso(num), 'El número no correcto');

document.write('<h2>Ejercicio 6</h2>');

document.write(
  '<p>Para este ejercicio se recibe un array de números, se identifican los números pares del mismo y posteriormente son sumados, retornando dicha suma. El otro método es el despliegue de los párrafos que muestran lo siguiente: array original, array de números pares, y resultado de la suma.</p>'
);

let arrayEj6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ej6 = new Ejercicio6(arrayEj6);

ej6.show();
