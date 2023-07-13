//Cuales son los metodos para haceder a los metodos del DOM?

//1.getElementById -> obtener Element del html por su id
//Ejemplo 1
const lorena = document.getElementById("lorena");
console.log(lorena);

//2. getElementsByClassName -> obtener lista de Elementos del html por su clase
//Ejemplo 1
const dairon = document.getElementsByClassName(".nombre");
console.log(dairon);

//3. getElemetsByTagName -> Obtener lista de elemtos del html por el nombre de etiqueta
//Ejemplo 1
/*const listaEstudiantes = document.getElementsByTagName("li");
console.log(listaEstudiantes);*/

//4. querySelector -> Devuelve el primer elemento que coincida con el nombre de etiqueta nombre de clase o id - querySelectorAll ->  Devuelve todos de elemento que coincida con la busquedad
//Ejemplo 1
const algo = document.querySelector("ul");
console.log(algo);

//1. createElement -> Crea un elemento HTML (NO LO AGREGA AL HTML)
const subtitulo = document.createElement("h3");

//2. createTextNode -> Crea un nodo de text (NO LO AGREGA AL HTML)
/*const texto = document.createTextNode("Este es un subtitulo");*/

//agregar elementos
//1. parentElement.appendchild() -> Agrega un hijo al final del contenedor padre
//seleciono al padre
const listaEstudiantes = document.querySelector("ul");
//creo un nuevo elemento
const andres = document.createElement("li");
//creo el texto que va a tener el nodo
const texto = document.createTextNode("andres");
//andres.textContent = "andres"
//agregar el texto al nodo
andres.appendChild(texto);
//agregar el li a la ul
listaEstudiantes.appendChild(andres);
