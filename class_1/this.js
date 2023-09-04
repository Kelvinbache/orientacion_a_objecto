//this un metodo o propiedad que nos retorna los valor del objecto, o el mismo objecto
//los metodos podemos cambiar una valor de una propiedad
const array = ["kelvin", "kelly", "manuel"];
const arrayNumeber = [1, 2, 3, 4, 5, 6];

const user = {
  resultString: "",
  resultNumber: "",

  travel(string, numeber) {
    //tambien podemos pasar un parametro y algumentos, como una funcion normal
    for (data of string) {
      this.resultString = string;
      this.resultNumber = numeber;
    }
  },
};

user.travel(array, arrayNumeber); //algurmento de la funcion
console.log(user);
