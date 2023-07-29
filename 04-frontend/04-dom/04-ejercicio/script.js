/*let peso = prompt("Escribe tu peso en kilogramos, solo coloca el numero");
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
}*/

const inputaltura = document.querySelector("#altura");
const inputpeso = document.querySelector("#peso");
const btn = document.querySelector("#BTN");

const calcular = function () {
  const peso = inputpeso.value;
  const altura = inputaltura.value;
  const imc = peso / (altura * altura);
  let resultado = parseFloat(imc.toFixed(2));
  const resultadoFinal = document.querySelector("#resultado");

  if (resultado < 18.5) {
    resultadoFinal.textContent =
      "Tu imc es " + resultado + ", tienes bajo peso.";
  } else if (resultado >= 18.5 && resultado < 25) {
    resultadoFinal.textContent =
      "Tu imc es " + resultado + ", tienes peso normal.";
  } else if (resultado >= 25 && resultado < 30) {
    resultadoFinal.textContent =
      "Tu imc es " + resultado + ", tienes sobre peso.";
  } else {
    resultadoFinal.textContent =
      "Tu imc es " + resultado + ", tienes obesidad.";
  }
  inputpeso.value = "";
  inputaltura.value = "";
};
btn.addEventListener("click", calcular);
