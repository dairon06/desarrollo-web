function sumar(a, b) {
  return a + b;
}

function mostrarEnpantalla() {
  var numero1 = parseInt(prompt("cual es el primer numero1"));
  var numero2 = parseInt(prompt("cual es el primer numero2"));

  var resultado = numero1 + numero2;

  document.write("la suma es: " + resultado);
}

mostrarEnpantalla();
