'use strict'

var edad1=10;
var edad2=12;

var edad=34;
var nombre="David Sanchez"

if (edad1>edad2) 
{
	console.log("edad uno gana");
}else
{
	console.log("edad 2 gana");
}

//OPERADORES

/*
	Mayor:>
	Menor:<
	mayor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto: !=

*/

if (edad >= 18 )
{
	console.log(nombre +" tiene "+edad+" años"+" ya esta viejo");
	if(edad<=33)
	{
		console.log("todavia eres milenial")
	}else
	{
		console.log("ya no eres milenial")
	}
}else{
	console.log(nombre +" tiene "+edad+" años"+" esta joven");
}

//OPERADORES LOGICOS
/*
AND: &&
OR: ||
Negacion: !

*/

