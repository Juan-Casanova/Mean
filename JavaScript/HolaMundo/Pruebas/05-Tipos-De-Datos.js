'use strict'

//OPERADORES

var numero1 = 7;
var numero2 = 12;
var operacion = numero1*numero2;

alert("el resultado es: "+ operacion );

//TIPOS DE DATOS

var numeroEntero=44;
var cadenaDeTexto="Hola jajajaja";
var verdaderoOFalso=true;

//Funciones para convetir de string a numero
var numeroString=40.6161;

console.log(Number(numeroString)+7);
console.log(parseInt(numeroString)+7);
console.log(parseFloat(numeroString)+7);

//Pasar de numero a string

console.log(String(numeroEntero)+4);

//Como saber el tipo de dato

console.log(typeof numeroEntero);
console.log(typeof verdaderoOFalso);
console.log(typeof cadenaDeTexto);
console.log(typeof operacion);