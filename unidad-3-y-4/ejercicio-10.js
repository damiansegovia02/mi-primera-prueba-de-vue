'use strict';


var pi = 3.1416,
	radio,
	diametro,
	perimetro,
	area;

diametro = parseFloat(prompt('Ingrese el valor del diámetro'));

radio = diametro / 2;

perimetro = 2 * pi * radio;

area = pi * radio ** 2;

document.write (`
<ul>
	<li>El valor del radio es <strong>${radio}</strong></li>
	<li>El valor del lierimetro es <strong>${perimetro}</strong></li>
	<li>El valor del área es <strong>${area}</strong></li>
</ul>
`);