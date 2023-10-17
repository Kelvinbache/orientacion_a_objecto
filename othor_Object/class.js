// class Person {
//   // metodo que indica que vamos a usar clases
//   constructor(name, lastName) {
//     // constructor una funcion que puede tomar los parametros, y retornar el valor
//     this.name = name;
//     this.lastName = lastName;
//   }
//   //para los metodos podemos hacer una asinacion por dentro
//   hola() {
//     return "hola " + this.name + " " + this.lastName;
//   }
// }

//No podemos podemos llamar un objecto de primero, por que aun no se creardo
// const kelvin = new Person("kelvin", "abacbe");
// console.log(kelvin.hola());

///clases sin nombre

const Persona = class { //literalmente es una funcion
  constructor(name, last) {
    this.name = name;
    this.last = last;
  }
  hello() {
    return "hola " + this.name + " " + this.last;
  }
};

const kelvin = new Persona("kelvin", "abache"); 
console.log(kelvin.hello());
