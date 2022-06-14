'use strict' ;

var c, sb, he, b, sf, m;

c = parseInt(prompt('Ingrese la categoría a la que pertenece')); // 3
he = parseFloat(prompt('Ingrese la cantidad de horas extra en el mes')); // 31

switch (c) {
	case 1:
		sb = 2000;
		if (he > 20) {
			b = 500;
		} else {
			b = 0;
		}
		break;
	case 2:
		sb = 3000;
		b = 0;
		break;
	case 3:
		sb = 4000;
		if (he > 30) {
			b = 1000;
		} else {
			b = 0;
		}
		break;
	default:
		sb = 0;
		b = 0;
}

sf = sb + b;

m = `El sueldo del mes es u$s${sf}`;

if (sf > 4000) {
	m += ' y supera los u$s4000';
} else {
	m += ' y no supera los u$s4000';
}

document.write(`<h2>${m}</h2>`);