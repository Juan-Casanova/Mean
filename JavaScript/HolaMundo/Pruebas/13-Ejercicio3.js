'use strict'

/*mostrat los numero introducidos en los numero ingresados*/

var num1=parseInt(prompt("ingresa el menor numero",0));
var num2=parseInt(prompt("ingresa el menor numero mayor",0));

if(num1>num2)
{
	let num3=num1;
	num1=num2;
	num2=num3;
}

document.write("<h1>De"+num1+" a "+num2+" estan los numero: </h1>")
for(var i=num1; i<=num2;i++)
{
	document.write(i+"<br/>");
}