/*const numeros = [2, 1, 5, 4, 7];

let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
  resultado += numeros[i];
  if (numeros[i] % 2 == 0) {
    console.log("El numero " + numeros[i] + " es par");
  } else {
    console.log("El numero " + numeros[i] + " es impar");
  }
}*/

/*const numeros = [2, 1, 5, 4, 7];

let par = 0;
let impar = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    par++;
  } else {
    impar++;
  }
}

console.log("Cantidad de numeros pares: " + par);
console.log("Cantidad de numeros pares: " + impar);*/

//funcion
function parImpar(array) {
  let par = 0;
  let impar = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      par++;
    } else {
      impar++;
    }
  }
  console.log("Cantidad de numeros pares: " + par);
  console.log("Cantidad de numeros pares: " + impar);
}

parImpar([1, 2, 2, 3, 5, 10]);
