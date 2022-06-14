'use strict';


var num1, num2, num3, num4,
	suma, promedio;

num1 = parseInt(prompt('Ingrese el primer número a sumar'));
num2 = parseInt(prompt('Ingrese el segundo número a sumar'));
num3 = parseInt(prompt('Ingrese el tercer número a sumar'));
num4 = parseInt(prompt('Ingrese el cuarto número a sumar'));

suma = num1 + num2 + num3 + num4;
promedio = suma / 4;

document.write(`<p>La suma de los números es ${suma}</p>`);
document.write(`<p>El promedio de los números es ${promedio}</p>`);