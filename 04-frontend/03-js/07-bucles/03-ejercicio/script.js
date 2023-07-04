//         i     0  1   2  3  4  5   6
/*const numeros = [5, 7, 10, 4, 8, 9, 10];

let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
  resultado += numeros[i];
}

console.log(resultado);*/

//funcion sumar
/*function sumar(numeros) {
  let resultado = 0;

  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }

  return resultado;
}

console.log(sumar([1, 2, 5, 6, 8]));*/

//for-in es para mostrar los objetos
/*const carro = {
  //propiedad
  llantas: 4,
  marca: "Renault",
  modelo: 2004,
  velocidad: 80,
};

for (const propiedad in carro) {
    console.log(propiedad)
  console.log(carro[propiedad]);
}*/

//for-of para recorrer a cada index y mostrar
let nombres = ["Dairon", "Jose", "Jonathan", "Angelo"];

for (const nombre of nombres) {
  console.log(nombre);
}
