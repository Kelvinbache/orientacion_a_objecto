// const user = {
//   name: "kelvin", //propiedades
//   lastName: "abache", // clave:valor
//   age: 30,
//   hooble: ["read", "programming", "run"],
//   adress: {
//     city: "maracainboi",
//     strent: "san francisco",
//   },
// };

// console.log(user);

// {}-> literamente estamos haciendo un objecto
// las propiedades describe un objecto

//metodos son las funciones que tiene ese objecto

const user = {
  name: "kelvin",
  lastName: "abache",
  saludar() { //podemos escribir una funcion asi
    return `hola ${this.name}`;
  },
};

console.log(user.saludar());
