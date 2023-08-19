const url = "https://jsonplaceholder.typicode.com/comments/";
const comentarios = document.querySelector(".comentario");
const parrafo = document.querySelector(".parrafo");

function mostrarComentario(data) {
  const comentario = document.createElement("div");
  comentario.className = "comentario";
  const h2 = document.createElement("h2");
  h2.textContent = data.name;
  const h3 = document.createElement("h3");
  h3.textContent = data.email;
  const p = document.createElement("p");
  p.textContent = data.body;
  comentario.append(h2, h3, p);
  comentarios.append(comentario);
}

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.forEach((comentario) => {
      mostrarComentario(comentario);
    });
  });

/* fetch(url)
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("No se ha podido conectar");
    } else {
      return respuesta.json();
    }
  })
  .then((data) => {
    mostrarComentario(data);
  })
  .catch((error) => {
    parrafo.textContent = "Mira este es el error " + error;
  });*/

/*
// opcion 1 con promesas
const url = ("https://jsonplaceholder.typicode.com/comments/1")

fetch(url)
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
    })
  )
  .catch((error) => console.log(error)); */

// opcion 2 con async - wait
async function obtenerUsuario(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

obtenerUsuario("https://jsonplaceholder.typicode.com/comments/1");
