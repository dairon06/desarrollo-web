let peso = prompt("Escribe tu peso en kilogramos, solo coloca el numero");
let altura = prompt("Escribe tu altura en metros, separado por punto");
let imc = peso / (altura * altura);
let resultado = parseFloat(imc.toFixed(2));

if (resultado < 18.5) {
  document.write("Tu imc es " + resultado + ", tienes bajo peso.");
} else if (resultado >= 18.5 && resultado < 25) {
  document.write("Tu imc es " + resultado + ", tienes peso normal.");
} else if (resultado >= 25 && resultado < 30) {
  document.write("Tu imc es " + resultado + ", tienes sobre peso.");
} else {
  document.write("Tu imc es " + resultado + ", tienes obesidad.");
}
