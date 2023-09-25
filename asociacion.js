 class Person{
    constructor(name,lastName){
        this.name = name,
        this.lastName = lastName
    }
}


const kelvin = new Person('kelvin','abache');
const santiago = new Person('santigo','abache');

//tenemos una asociacion entre dos objectos
santiago.parent = kelvin;

console.log(santiago);
console.log(kelvin)