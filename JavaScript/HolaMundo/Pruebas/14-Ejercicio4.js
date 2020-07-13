'use strict'

/*
	Mostrar todos los numeros impares que hay entre dos numeros introducidos
*/

var num1=parseInt(prompt("dame un numero",0));
var num2=parseInt(prompt("dame un numero",0));

document.write("<h1> los numeros impares entre "+num1+" y "+num2+" son:")


for(var i=num1; i<=num2;i++)
{
	if((i%2) != 0)
	{
		document.write(i+"es impar "+"<br/>");
		console.log(i);
	}
}

/*
while(num1<num2)
{
	num1++;

	if(num1%2 !=0)
	{
		console.log(num1);
	}
}*/