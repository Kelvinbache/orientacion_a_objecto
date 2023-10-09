class Persona {
  constructor(name, lastName,age) { ///estamos pasndo los datos desde otra clase
    this.name = name, 
    this.lastName = lastName;
    this.age = age
  }
}

class Programer extends Persona {
  constructor(lenguaje,name,lastName,age) {
    super(name,lastName,age); //pasando datos a la otra clase 
    this.lenguaje = lenguaje;
  }
}

const Programers = new Programer("js",'kelvin','abache',20);
console.log(Programers)

