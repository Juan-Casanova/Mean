'use strict'

//Tabla de multiplicar de un numero intrucido

var num=parseInt(prompt("dame un numero",0));

for(var i=0; i<=10;i++)
{
	let mul=i*num;
	document.write(i+" * "+num+" = "+ mul +"<br/>");
}