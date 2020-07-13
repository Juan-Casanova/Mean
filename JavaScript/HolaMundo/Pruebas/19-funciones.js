'use strict'

//Funciones

function porConsola(num1,num2)
{
	console.log("suma: "+(num1+num2));
	console.log("resta: "+(num1-num2));
	console.log("multiplicacion: "+(num1*num2));
	console.log("division: "+(num1/num2));
	console.log("************************************");
}

function porPantalla(num1,num2)
{
	document.write("suma: "+(num1+num2)+"<br/>");
	document.write("resta: "+(num1-num2)+"<br/>");
	document.write("multiplicacion: "+(num1*num2)+"<br/>");
	document.write("division: "+(num1/num2)+"<br/>");
}

function calculadora(num1,num2, mostrar=false)
{
	//console.log("Hola jajaja");
	//console.log("q me ves perro");

	if (mostrar==false) {
		porConsola(num1,num2);
	//return("te lo paso papi");
	}else
	{
		porPantalla(num1,num2);
	}
}

//var resultado=calculadora();


//console.log(resultado);
/*
for(var i=1;i<=10;i++)
{
	console.log(i);
	calculadora(i,i+2);
	//calculadora(i,i+3);
}
*/

calculadora(1,4);
calculadora(5,8,true);

