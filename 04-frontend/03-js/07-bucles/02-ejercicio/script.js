//for par
/*for (let contador = 2; contador <= 20; contador += 2) {
  console.log(contador);
}

console.log("El ciclo ya termino");*/

//for impar
/*for (let contador = 1; contador <= 15; contador += 2) {
  console.log(contador);
}

console.log("El ciclo ya termino");*/

//mostrar par y impar
/*for (let contador = 1; contador <= 20; contador++) {
  if (contador % 2 == 0) {
    console.log("El numero " + contador + " es par");
  } else {
    console.log("El numero " + contador + " es impar");
  }
}*/

let resultado = 0;

for (let i = 1; i <= 100; i++) {
  resultado += i;
}

console.log("Resultado " + resultado);
