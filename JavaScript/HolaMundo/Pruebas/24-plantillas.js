'use strict'

//Plantillas de texto

var nombre=prompt("mete tu nombre");
var apellidos=prompt("tu apellidos");

var texto ="mi nombre es: "+nombre+"<br/> mis apellidos son:"+apellidos;
var texto= `

<h1>hola que tal</h1>
<h3>mi nombre es: ${nombre}</h3>



`;
	

document.write(texto);