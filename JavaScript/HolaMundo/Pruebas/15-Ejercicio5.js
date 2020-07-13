'use strict'

/*
Mostrar todos los numeros divisores de un numero que se itroduce 
*/
var num1=parseInt(prompt("dame un numero",0));

for(var i=1; i<=num1;i++)
{
	if(num1%i==0)
	{
		console.log("divisor: ",+i);	
	}
}