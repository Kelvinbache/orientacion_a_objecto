function Person(name, lastName){ //Tambien podemos pasar valores como una funcion normal 
    this.name = name
    this.lastName = lastName
}


const kelvin = new Person("kelvin","abache"); // podemos pasar valor a la funcion o al constructo 

//tambien podemos crear metos desde afuera del constructor
// kelvin.hello = function(){
//     return "hello " + this.name + " " + this.lastName
// }

//Pero si queremos extender la funcion del objecto, debemos utilizar un metodo 

Person.prototype.hello = function(){
    return "hello " + this.name + " " + this.lastName
} 

// Cuendo estamos creando un objecto, no solo una copia sino segue conectado al constructo 

console.log(kelvin,"funcion del objecto -->",kelvin.hello())

