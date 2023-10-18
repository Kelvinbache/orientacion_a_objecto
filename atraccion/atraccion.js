class ArrayNumber {
  constructor(number) {
    this.number = number;
  }

  set array(travel) {
     [this.number] = travel // resibiendo algo sin saber como funciona
  }
}

const BoxOne = new ArrayNumber([1, 3, 3]);
BoxOne.array = [12] // modificando el resultado de algo
console.log(BoxOne);

// class Person {
//   // Clase padre
//   constructor(name, lastName) {
//     this._name = name;
//     this._lastName = lastName;
//   }
// }

// class Word extends Person {
//   //Aqui estoy heredan los valores
//   constructor(name, lastName, Word) {
//     super(name, lastName);
//     this.Word = Word;
//   }

//   get WordOfPerson() {
//     //Aqui estoy encasulando los valores
//     return `soy ${this._name} ${this._lastName} trbajo como ${this.Word}`;
//   }
// }

// const kelvin = new Word("kelvin", "abache", "programador");
// const manuel = new Word("manuel", "abache", "fumigador");
// const santiago = new Word("santiago", "abache", "no trabajo");

// console.log(kelvin);
// console.log(manuel);
// console.log(santiago);
