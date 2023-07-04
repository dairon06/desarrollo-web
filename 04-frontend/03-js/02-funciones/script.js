//manera incorrecta
function sumar(a, b) {
  console.log(a + b);
  alert(a + b);
  return a + b;
}

//LLamar una funcion
sumar(4, 6);

//funcion restar
function restar(a, b) {
  console.log(a - b);
  alert(a - b);
}

restar(10, 5);

//manera correcta
function sumar(a, b) {
  return a + b;
}

console.log(sumar(10, 6));
//guardar funcion y mostrar
var totalCompra = sumar(2000, 5000);
alert(totalCompra);
