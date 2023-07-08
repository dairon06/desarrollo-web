//Function constructora de prototipos -> El molde para crear objetos
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  //metodos adentro de persona
  this.cumplir = function () {
    this.edad++;
    return this.edad;
  };
}

//metodo dentro de prototypo o fuera de persona
Persona.prototype.saludar = function () {
  console.log("hola soy " + this.nombre);
};

//instanciar el prototipo persona
const lorena = new Persona("lorena", 16);

//Prototipos con sintaxis de clases -> clase == molde o plantilla
class Estudiante {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return "Hola soy el estudiante " + this.nombre;
  }

  cambiarCurso(nuevoCurso) {
    this.curso = nuevoCurso;
    return "El nuevo curso que vas a ver es " + this.curso;
  }
}

const jonathan = new Estudiante("Jonathan", 15, "Programacion");

//clases con herencia
class Animal {
  constructor(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }
  saludar() {
    return "Hola soy " + this.nombre;
  }
}

//         herencia
class Perro extends Animal {
  constructor(nombre, especie, edad, raza, color) {
    super(nombre, especie, edad);
    this.raza = raza;
    this.color = color;
  }
  saludar() {
    return "guao guao soy " + this.nombre;
  }
  darLaPata() {
    return "🫱";
  }
}

const chandoso = new Perro("Chandoso", "Canino", 1, "chihuahua", "Cafe");
const jirafa = new Animal("Jirafales", "Jirafus", 8);
