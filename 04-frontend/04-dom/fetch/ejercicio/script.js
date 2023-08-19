const url = "https://rickandmortyapi.com/api/character";
const comentarios = document.querySelector(".comentarios");
const parrafo = document.querySelector(".parrafo");

function mostrarComentario(data) {
  const comentario = document.createElement("div");
  comentario.className = "comentario";
  const img = document.createElement("img");
  img.src = data.image;
  img.alt = "imagen";
  const h2 = document.createElement("h2");
  h2.textContent = "NOMBRE: " + data.name;
  const h3 = document.createElement("h3");
  h3.textContent = "ESTADO: " + data.status;
  const h4 = document.createElement("h4");
  h4.textContent = "ESPECIE: " + data.species;
  const h5 = document.createElement("h5");
  h5.textContent = "GENERO: " + data.gender;
  comentario.append(img, h2, h3, h4, h5);
  comentarios.append(comentario);
}

// opcion 2 con async - wait
async function obtenerUsuario(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.results.forEach((comentario) => {
      mostrarComentario(comentario);
    });
  } catch (error) {
    parrafo.textContent = "Mira este es el error " + error;
  }
}

obtenerUsuario("https://rickandmortyapi.com/api/character/");
