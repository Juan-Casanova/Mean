'use strict'

/*
	for mostrar la media y la suma hasta que meta un numero negativo
*/

var suma=0;
var contador=0;
var media=0;
var numeroIngresado=0;

do
{
	numeroIngresado=parseInt(prompt("Ingrese un numero",0));
	
	if(isNaN(numero))
		{
			numero=0;
		}else if (numeroIngresado>0) 
		{
			suma+=numeroIngresado;
			contador++;
			media=suma/contador;
		}else
		{
			alert("La suma es: "+suma);
			alert("La media es: "+media);
		}
}while(numeroIngresado>0)
