const d = document;
export function calculadora() {
  const pantalla = d.querySelector(".pantalla");
  const botones = d.querySelectorAll(".btn-calculadora");

  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const btnapretado = boton.textContent;

      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar") {
        if (
          pantalla.textContent.length === "1" ||
          pantalla.textContent === "Error!"
        ) {
          pantalla.textContent = "0";
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
          return;
        }
      }

      if (boton.id === "igual") {
        try {
          pantalla.textContent = eval(pantalla.textContent);
        } catch (error) {
          pantalla.textContent = "Error!";
        }
        return;
      }

      if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
        pantalla.textContent = btnapretado;
      } else {
        //otra manera
        // d.querySelector(".pantalla").innerHTML += boton.textContent;
        pantalla.textContent += btnapretado;
      }
    });
  });
}
