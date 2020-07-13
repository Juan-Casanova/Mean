'use strict'

/*
	pida dos numero
	verificarlos si son numero si no que lo vuelva a pedir
	mostrar en la pagina alerta y consola de sumar, restar multiplicar y dividir
*/

var num1;
var num2;

do
{
	num1=parseInt(prompt("Dame un numero 1 valido",0));
}while(isNaN(num1));

do
{
	num2=parseInt(prompt("Dame un numero 1 valido",0));
}while(isNaN(num2));


alert("La suma es igual a:"+ (num1+num2));
console.log("La suma es igual a:"+ (num1+num2));
document.write("La suma es igual a:"+ (num1+num2)+"<br/>");

alert("La resta es igual a:"+ (num1-num2));
console.log("La resta es igual a:"+ (num1-num2));
document.write("La resta es igual a:"+ (num1-num2) +"<br/>");

alert("La multiplicacion es igual a:"+ (num1*num2));
console.log("La multiplicacion es igual a:"+ (num1*num2));
document.write("La multiplicacion es igual a:"+ (num1*num2)+"<br/>");

alert("La division es igual a:"+ (num1/num2));
console.log("La division es igual a:"+ (num1/num2));
document.write("La division es igual a:"+ (num1/num2) +"<br/>");