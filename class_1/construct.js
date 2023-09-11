//constructor
// function Person() {
//   (this.name = ""),
//     (this.lastName = ""),
//     (this.age = 0),
//     (this.salud = function () {
//       return `hola ${this.name} ${this.lastName}`;
//     });
// }

// const user1 = new Person();
// user1.name = "kelvin";
// user1.lastName = "abache";
// user1.age = 18;
// console.log(user1.salud());

// tambien tenemos un metodo que nos crear un ojecto literal

// const string = new Object("hola mundo"); // estamos creando un objecto

// string.name = "string hello "; //Podemos poner otros objectos heredados

// string.test = function () {
//   //podemos ayadir funciones a este objecto
//   return this + "test";
// };

// console.log(string.test());

const user = {
  name: "kelvin",
  lastName: "abache",
  age: 18,
  shomeName() {
    return  this.name + "hola";
  },
};

for (const travel of Object.values(user)) { // Object es una propiedad que nos permite asseder, a las propiedades de los objectos
  console.log(travel);
}
