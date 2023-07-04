var vaso = {
  cosa: "mugs",
  material: ["porcelana", "blanco"],
  alto: "10cm",
  diseño: "pandas",
  colorAmarillo: false,
  colorWhite: true,
  cantidad: 1,

  llenar() {
    return "el " + this.cosa + " se llena de agua";
  },

  vaciar() {
    return "el " + this.cosa + " se queda sin agua";
  },
};
