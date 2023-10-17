// function Person() {
//   "use strict";
//   this.name = "",
//   this.lastName = "";
// }

// const person = new Person(); //new crea un nuevo objecto, pero usando las propiedades del objecto proncipal
// console.log(person);


const users = { //Podemos crear un contenedor que tenga al constructor  
    Person: function(){
        'use strict'
        this.name = "",
        this.lastName = ""
    }
}

const person = new users.Person(); //es muy importante poner new, si quieres crear una nueva propiedad
console.log(person)