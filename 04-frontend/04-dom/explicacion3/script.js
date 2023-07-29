let ventana;

const btnabrir = document.querySelector("#abrir-ventana");

btnabrir.addEventListener("click", function mensaje() {
  console.log("Abriste una nueva ventana");
  ventana = open(
    "https://www.youtube.com/watch?v=pHWoUH9Nigc&ab_channel=%E3%85%A4IndieForever"
  );
});

const btncerrar = document.querySelector("#cerrar-ventana");

btncerrar.addEventListener("click", function () {
  console.log("Cerraste la ventana");
  ventana.close();
});

const btnimprimir = document.querySelector("#imprimir-ventana");

btnimprimir.addEventListener("click", function () {
  console.log("Imprimiste una ventana");
  print();
});
