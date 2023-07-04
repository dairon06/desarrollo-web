//recolectar informacion
var base = parseFloat(prompt("cual es la base del triangulo?"));
var altura = parseFloat(prompt("cual es la altura del triangulo?"));

//hacer operacion
var resultado = (base * altura) / 2;

//dar informacion
document.write("este es el resultado: " + resultado);
document.write("<br>Finalizado la aplicacion");

//dar informacion mas corta y legible
`este es el resultado: ${resultado}`;
