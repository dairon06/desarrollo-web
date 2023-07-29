// Tu codigo aqui:
/*div.innerHTML = ` <h1 class="titulo">Los Gatos</h1>
<p class="descripcion">
  Los gatos son animales domésticos que se caracterizan por su elegancia,
  agilidad y carácter independiente. Son mascotas muy populares en todo el
  mundo.
</p>
<img
  class="imagen-gato"
  src="https://http.cat/images/200.jpg"
  alt="Gato"
/>
<h2 class="titulo">Razas de Gatos</h2>
<ul class="razas-gatos">
  <li class="descripcion">Persa</li>
  <li class="descripcion">Siames</li>
  <li class="descripcion">Maine Coon</li>
  <li class="descripcion">Bengalí</li>
</ul>`;*/

//h1
//Seleciono la etiqueta div por su id
const div = document.querySelector("#app");

//Creo una etiqueta h1
const esteh1 = document.createElement("h1");

//Le pongo una clase a la etiqueta h1
esteh1.className = "titulo";

//Agrego el texto a la etiqueta h1
esteh1.textContent = "Los Gatos";

//Guardo la etiqueta h1 dentro del div
div.insertAdjacentElement("afterbegin", esteh1);
//app.appenChild(esteh1);
//h1

//etiqueta p

const parrafo = document.createElement("p");

parrafo.className = "descripcion";

parrafo.textContent = `Los gatos son animales domésticos que se caracterizan por su elegancia,
agilidad y carácter independiente. Son mascotas muy populares en todo el
mundo.`;

div.insertAdjacentElement("beforeend", parrafo);
//app.appenChild(parrafo);
//etiqueta p

//img
const img = document.createElement("img");

img.className = "imagen-gato";

img.src =
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/03/gato-botas-ultimo-deseo-2649871.jpg?tf=3840x";

img.alt = "Gato";

div.insertAdjacentElement("beforeend", img);
//app.appenChild(img);
//img

//h2
const esteh2 = document.createElement("h2");

esteh2.className = "titulo";

esteh2.textContent = "Razas de Gatos";

div.insertAdjacentElement("beforeend", esteh2);
//app.appenChild(esteh2);
//h2

//ul
const ul = document.createElement("ul");

ul.className = "razas-gatos";

div.insertAdjacentElement("beforeend", ul);
//app.appenChild(ul);
//ul

//li1
const ul1 = document.querySelector("ul");

const li1 = document.createElement("li");

li1.className = "descripcion";

li1.textContent = "Persa";

ul.insertAdjacentElement("beforeend", li1);
//app.appenChild(li1);
//li1

//li2
const li2 = document.createElement("li");

li2.className = "descripcion";

li2.textContent = "Siames";

ul.insertAdjacentElement("beforeend", li2);
//app.appenChild(li2);
//li2

//li3
const li3 = document.createElement("li");

li3.className = "descripcion";

li3.textContent = "Maine Coon";

ul.insertAdjacentElement("beforeend", li3);
//app.appenChild(li3);
//li3

//li4
const li4 = document.createElement("li");

li4.className = "descripcion";

li4.textContent = "Bengalí";

ul.insertAdjacentElement("beforeend", li4);
//app.appenChild(li4);
//li4

const imagen = document.querySelector(".imagen-gato");

const salu2 = function (evento) {
  const li5 = document.createElement("li");

  li5.className = "descripcion";

  li5.textContent = "Gato con botas";

  ul.insertAdjacentElement("beforeend", li5);

  alert("Hola soy el gato con botas");
};

imagen.addEventListener("click", salu2);
