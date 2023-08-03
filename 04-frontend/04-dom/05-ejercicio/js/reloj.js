const d = document;
export function reloj() {
  let relojTime;
  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-activar")) {
      relojTime = setInterval(() => {
        let relojHora = new Date().toLocaleString();
        d.querySelector(
          "#reloj"
        ).innerHTML = `<h3 id="relojHora"> ${relojHora}`;
      }, 1000);
      e.target.disabled = true;
      //alarma
      /* setTimeout(() => {
        console.log("hola");
      }, 2000);*/
      //alarma
    }
    if (e.target.matches("#btn-desactivar")) {
      clearInterval(relojTime);
      d.querySelector("#btn-activar").disabled = false;
      d.querySelector("#reloj").innerHTML = null;
      console.clear();
    }
  });
}
