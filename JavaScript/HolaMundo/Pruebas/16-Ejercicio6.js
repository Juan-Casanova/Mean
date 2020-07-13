'use strict'

/*
Diga si el numero es par o impar
1.-pedir numero
2.-validar que sea valido
3.-decir si es par o impar 
*/

var num;

do{
	num=parseInt(prompt("ingresa Num a comparar",0));
}while(isNaN(num));

switch(num%2)
{
	case 0:
	alert("este numero es par");
	break;

	case 1:
	alert("este numero es impar");
	break;
}