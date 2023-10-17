// get solo recibe valor del constructor y no podemos pasar algun parametro

class Person {
  constructor(name, lastName) {
    this._name = name; // this._ significa que la variable es privada y no podemos aceder facilmente a ella
    this._lastName = lastName;
  }

  get nameAndLastName() {
    // Aqui estamos haciendo un encasulamiento un returno de un nombre y apellido
    return this._name + " " + this._lastName;
  }
}

class word extends Person {
  //estamos heredando una variable de otra clase
  constructor(name, lastName, word) {
    super(name, lastName);
    this.word = word;
  }
  get wordOfPerson() {
    return this._name + " " + this._lastName + " " + this.word;
  }
}

const wordOfPerson = new word("kelvin", "abache", "programador");
console.log(wordOfPerson.wordOfPerson);
