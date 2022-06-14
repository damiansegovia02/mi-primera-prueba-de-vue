'use strict';


var sueldo, valor, cantidad, ant;

valor = parseFloat(prompt('ingrese el valor de la hora'));
cantidad = parseFloat(prompt('ingrese la cantidad de horas trabajadas'));
ant = parseFloat(prompt('ingrese la cantidad de años trabajados'));

/*
sueldo = cantidad * valor;
sueldo = sueldo * .15 * ant + sueldo;
//sueldo += sueldo * .15 * ant;
*/

sueldo = cantidad * valor * 0.15 * ant  + cantidad * valor;

document.write(`<p>El sueldo mensual es de u$s${sueldo}<p/>`);