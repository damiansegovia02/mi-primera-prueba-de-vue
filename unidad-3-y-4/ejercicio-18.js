'use strict';

// Realicemos la codificación a partir de aquí:
var min, max, num, r, dif;

min = parseInt(prompt('Ingrese aquí el mínimo'));
max = parseInt(prompt('Ingrese aquí el máximo'));

dif = max - min;

if (dif >= 5) {
	num = parseInt(prompt('Ingrese aquí un numero al azar'));
	r = `El número ${num} `;
	if (num >= min && num <= max) {
		r += 'esta en rango';
		if (num % 2 == 0){
			r += ' y también es par';
		}
	} else {
		r += 'no esta en rango';
		if (num % 2 != 0){
			r += ' y también es impar';
		}
	}
} else {
	r = `El rango entre ${min} y ${max} da una diferencia de ${dif}, que no cumple los requisitos`;
}

document.write(`<p>${r}</p>`);