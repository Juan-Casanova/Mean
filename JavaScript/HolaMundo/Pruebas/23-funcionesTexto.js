'use strict'

//Transformar textos

var num=22;
var txt1="ya wey wey wey wey wey";
var txt2="parale";

/*
var dato=num.toString();
	dato=txt1.toUpperCase();
	dato=txt2.toLowerCase();

console.log(dato);

//calcular longitud

var nombre="89849898819819198198198";
	nombre=["hola","hola"];

console.log(nombre.length);

//Concatenar Textos

//var textoTotal= txt1+" "+txt2;
var textoTotal=txt1.concat(" "+txt2);
console.log(textoTotal);
*/
//BUSQUEDAS DE TEXTO
var busqueda=txt1.indexOf("wey");
	busqueda=txt1.lastIndexOf("wey");
	busqueda=txt1.search("wey");
	busqueda=txt1.match(/wey/g);
	busqueda=txt1.substr(5,10);
	busqueda=txt1.charAt(13);
	busqueda=txt1.startsWith("ya");
	busqueda=txt1.endsWith("ya");
	busqueda=txt1.includes("wey");
console.log(busqueda);

//REMPLAZO DE TEXTO

var remplazar=txt1.replace("wey","jajaja");
	remplazar=txt1.slice(10);//corta antes de lo indicado
	remplazar=txt1.slice(1,5);
	remplazar=txt1.split(" "); //corta cada que hay el carctaer indicado
	remplazar=txt1.trim();//elemina los espacios del final y inicio
console.log(remplazar);