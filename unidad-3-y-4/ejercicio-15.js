'use strict';

var num, m = '';

num = parseInt(prompt('Escribe un número'));

m += `<p>El número ${num} es `;

if (num == 0) {
	m += 'cero';
} else if (num % 2 == 0) {
	m += 'par';
} else {
	m += 'impar';
}

m += '.</p>';

document.write(m);