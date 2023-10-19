class Calculator {
  constructor(number1, number2) {
    this._numberOne = number1;
    this._numberTwo = number2;
  }
}

//estamos heredando los valores del padre
class Add extends Calculator {
  constructor(number1, number2) {
    super(number1, number2);
  }

  get CalculatorAdd() {
    return this._numberOne + this._numberTwo;
  }
}

//estamos heredando los valores del padre
class Subtraction extends Calculator {
  constructor(number1, number2) {
    super(number1, number2);
  }

  get CalculatorTheSubtraction() {
    return this._numberOne - this._numberTwo;
  }
}

//Estamos pidiendo el metodo queremos hacer
const calculator = (operation, number1, number2) => {
  if (operation === "add") {
    const add = new Add(number1, number2);
    return "resiltado de la suma:" + add.CalculatorAdd;
  } 
  
  else if (operation === "subtraction") {
    const subtraction = new Subtraction(number1, number2);
    return "resultado de la resta:" + subtraction.CalculatorTheSubtraction;
  } 
  
  else {
    return `aun no hay una operacion`;
  }
};

console.log(calculator("subtraction", 1, 6));
console.log(calculator("add", 1, 6));
