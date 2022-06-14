'use strict';

// Realicemos la codificación a partir de aquí:
var num, r;

num = parseFloat(prompt('Ingrese un número'));

r = 'El número es ';

if (num % 3 == 0 && num % 5 == 0){
	r += 'múltiplo de ambos';
} else if (num % 5 == 0){
	r += 'múltiplo de 5 ';
} else if (num % 3 == 0) {
	r += 'múltiplo de 3 ';
} else{
	r += 'múltiplo de ninguno';
}

document.write(`<p>${r}</p>`);