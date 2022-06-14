'use strict';

// Realicemos la codificación a partir de aquí:
var letra, r = '';

letra = prompt('Ingresa una letra y te dire si es una vocal o una consonante');

r += `La letra ${letra} es la `;

switch (letra) {
	case 'a':
	case 'A':
		r += 'primera vocal';
		break;
	case 'e':
	case 'E':
		r += 'segunda vocal';
		break;
	case 'i':
	case 'I':
		r += 'tercera vocal';
		break;
	case 'o':
	case 'O':
		r += 'cuarta vocal';
		break;
	case 'u':
	case 'U':
		r += 'quinta vocal';
		break;
	default:
		r = 'La letra que ingresaste es una consonante';
}
document.write(`<p>${r}</p>`);