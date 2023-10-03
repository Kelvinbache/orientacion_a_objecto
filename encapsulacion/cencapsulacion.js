function company(name) {
  let empleados = []; // asi estamos encansulamos una parte del codigo
  this.name = name;

  //methods
  this.screen = function () {
    return empleados;
  };

  this.add = function (empleadoss) {
    empleados.push(empleadoss);
  };
}

const company1 = new company("tecnoligi");
company1.add("kelvin abache");

console.log(company1.screen());
