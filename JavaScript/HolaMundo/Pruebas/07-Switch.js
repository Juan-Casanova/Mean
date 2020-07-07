'use strict'

//Switch
var edad=34;
var imprime=""

switch(edad)
{
	case 18:
		imprime="Acabas de dejar ser verde";
	break;

	case 25:
		imprime="Ya eres viejo";
	break;

	case 40:
		imprime="cuidado";
	break;

	case 75:
		imprime="jajaja anciano";
	break;

	default:
		imprime="Tu edad es neutra";
	break;
}

console.log(imprime);