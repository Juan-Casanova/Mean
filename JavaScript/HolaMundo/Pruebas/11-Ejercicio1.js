'use strict'

/*
	Programa que pida dos numero y que nos diga cual es el mayor, el menor y si son iguales
	PLUS si los numeros no son numero o menor a cero los vuelva a pedir
*/

var num1=parseInt(prompt("ingrese el primer numero",0));
var num2=parseInt(prompt("ingrese el segundo numero",0));

while(num1<=0||num2<=0||isNaN(num1)||isNaN(num2))
{
	num1=parseInt(prompt("ingrese el primer numero",0));
	num2=parseInt(prompt("ingrese el segundo numero",0));
}

	
		if (num1==num2)
		{
			alert("son iguales");
		}else if (num1>num2)
		{
			alert(num1 + " es mayor que "+ num2);
		}else if(num2>num1)
		{
			alert(num2 + " es mayor que "+ num1);
		}else
		{
			alert("no me veas la carita");
		}
	




