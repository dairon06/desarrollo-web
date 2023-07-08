//clases
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return this;
  }

  prender() {
    return "Se prendio el vehiculo";
  }
}

const cicla = new Vehiculo("GW", "lancer", 2016);

//clases con herencia
class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }

  obtenerDetalles() {
    return `Este automovil es marca ${this.marca}, modelo ${this.modelo}, año ${this.año} y tiene ${this.puertas} puertas`;
  }
}

const carro = new Automovil("lamborghini", "veneno", 2013, 4);

//clases con herencia
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `Esta moto es marca ${this.marca}, modelo ${this.modelo}, año ${this.año} y es ${this.cilindrada}c.c`;
  }
}

const moto = new Motocicleta("Honda", "XR 150L", "2023", 149.1);
