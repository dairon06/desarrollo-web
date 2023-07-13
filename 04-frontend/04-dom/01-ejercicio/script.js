//Actividad

// a) Acceso por etiqueta:
// Utiliza JavaScript para acceder a todos los elementos <p> en la página y muestra la colección de elementos en la consola del navegador.
const etiquetasP = document.querySelectorAll("p");
console.log(etiquetasP);

// b) Acceso por clase:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y muestra la colección de elementos en la consola del navegador.
const clases = document.querySelectorAll(".clase1");
console.log(clases);

// c) Acceso por id:
// Utiliza JavaScript para acceder al elemento con el id "id2" y muestra el elemento en la consola del navegador.
const id2 = document.querySelector("#id2");
console.log(id2);

// d) Acceso por selector de CSS:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y al elemento con el id "id2" utilizando un selector de CSS combinado. Muestra la colección de elementos en la consola del navegador.
const clasesid = document.querySelectorAll(".clase1, #id2");
console.log(clasesid);

// Recuerda utilizar la consola del navegador para ver los resultados de cada tarea. ¡Diviértete explorando el acceso al DOM!
