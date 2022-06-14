'use strict';


var valor,
	horas,
	antiguedad,
	sueldoMensualSinBono,
	SueldoTotal,
	cantidadSegurosVendidos,
	valorSeguroMasCaro,
	bono1,
	bono2,
	bono3,
	promedio;

valor = parseFloat(prompt(`Por favor, ingrese en valor NUMÉRICO el valor por hora trabajada`,0)); 
horas = parseFloat(prompt(`Por favor, ingrese en valor NUMÉRICO la cantidad de horas trabajadas este mes`,0)); 
antiguedad = parseInt(prompt(`Por favor, cantingrese en valor NUMÉRICO sus años de antiguedad`,0)); 
cantidadSegurosVendidos = parseInt(prompt(`Por favor, ingrese en valor NUMÉRICO la cantidad de seguros vendidos este mes`,0));
valorSeguroMasCaro = parseFloat(prompt(`Por favor, ingrese en valor NUMÉRICO el valor del seguro mas caro vendido este mes`,0)); 

sueldoMensualSinBono = valor * horas;
bono1 = 0.5 * valorSeguroMasCaro; 
bono2 = 0.25 * sueldoMensualSinBono * cantidadSegurosVendidos;
bono3 = 0.15 * sueldoMensualSinBono * antiguedad; 

SueldoTotal = sueldoMensualSinBono + bono1 + bono2 + bono3; 

promedio = SueldoTotal / horas; 

document.write(`<p>Usted debe cobrar $${SueldoTotal} este mes. Con un promedio de $${promedio} por hora trabajada.</p>`);