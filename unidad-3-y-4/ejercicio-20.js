'use strict';

// Realicemos la codificación a partir de aquí:
var lado1, lado2, lado3, r;

lado1 = parseFloat(prompt('Ingrese de lado 1 del triángulo'));
lado2 = parseFloat(prompt('Ingrese de lado 2 del triángulo'));
lado3 = parseFloat(prompt('Ingrese de lado 3 del triángulo'));

r = 'El triángulo es ';

if (lado1 == lado2 && lado2 == lado3) {
	r += 'equilatero';
} else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
	r+= 'isósceles';
} else {
	r += 'escaleno';
}

document.write(`<h2>${r}</h2>`);