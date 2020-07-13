'use strict'

//FUNCIONES ANONIMAS

//es una funcion que no tiene nombre

var peicula=function(nombre)
{
	return "La pelicula es: "+nombre;
}


function sumame(num1,num2, sumaYMuestra, sumaPorDos)
{
	var sumar=num1+num2;
	sumaYMuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}


//SIN FLECHA

sumame(5,7,function(dato){
 console.log("las suma es ", dato);
}, function(dato){
	console.log("la suma por dos: ",(dato*2));
});

//CON FLECHA

sumame(5,7,dato=>{
 console.log("las suma es ", dato);
}, dato=>{
	console.log("la suma por dos: ",(dato*2));
});
