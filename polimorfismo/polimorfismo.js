//clase padre

class Person {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
  }

  greet() {
    return `hola soy ${this._name} ${this._lastName}`;
  }
}

class Student extends Person { //pero demos tener encuenta la herencia de los datos 
  constructor(name, lastName,role) { 
    super(name, lastName);
    this.role = role;
  }
  polymorphism() {
    return `${super.greet()} y mi rol es ser ${this.role}`; // podemos hacer polimorfismo mediante una llamada de super 
  }
}

const kelvin = new Student("kelvin", "abache", "estudiante");
console.log(kelvin.polymorphism());
