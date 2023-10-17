class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
}

class Atribute extends Car {
  constructor(model,color) {
    super(model,color);
  }

  acceler() {
    return `estoy accelerando ${this.model}`;
  }

  stop() {
    return `estoy parado${this.model}`;
  }
}

const mustand = new Atribute(null, "mustan");
console.log(mustand.acceler())
