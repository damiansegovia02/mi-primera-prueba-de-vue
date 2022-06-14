'use strict';


var valHora, cantHoras, sueldo;

valHora = parseFloat(prompt('Ingrese el valor de la hora'));
cantHoras = parseInt(prompt('Ingrese canitdad de horas trabajadas'));

sueldo = cantHoras * valHora;

document.write (`<h2>Tu sueldo es u$s${sueldo}<h2/>`);