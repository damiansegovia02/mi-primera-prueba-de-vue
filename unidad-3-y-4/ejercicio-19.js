'use strict';

// Realicemos la codificación a partir de aquí:
var operador,
	numUno,
	numDos,
	op,
	res;

numUno = parseFloat(prompt('por favor, ingrese el primer número a participar de la operación'));
numDos = parseFloat(prompt('Por favor, ingrese el segundo número a participar de la operación'));
operador = prompt('Por favor, ingrese el operador a intervenir los dos numeros');

switch (operador) {
	case '+':
		op = `${numUno} + ${numDos}`;
		res = numUno + numDos;
		break;
	case '-':
		op = `${numUno} - ${numDos}`;
		res = numUno - numDos;
		break;
	case '*':
		op = `${numUno} * ${numDos}`;
		res = numUno * numDos;
		break;
	case '/':
		op = `${numUno} / ${numDos}`;
		res = numUno / numDos;
		break;
	default:
		op = 'imposible de realizar';
		res = 'no te lo pienso calcular';
}

document.write(`<p>La operacion deseada es ${op} y el resultado, ${res}.</p>`);