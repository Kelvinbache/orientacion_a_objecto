const MethodOs = {
  os: require("node:os"),
};

class Components {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }
  answer() {
    return `este es el modelo:${this.model}------> esta la velocidad de tu PC:${this.speed}`;
  }
}

const [{ model }, { speed }] = MethodOs.os.cpus();
const datasOFComponents = new Components(model, speed);
console.log(datasOFComponents.answer());
