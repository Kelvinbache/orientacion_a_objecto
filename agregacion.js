const company = {
    name:"orgaction",
    employess:[],

}

class Person {
    constructor(name,lastName){
        this.name = name,
        this.lastName = lastName
    }
}


const kelvin = new Person('kelvin','abache');
company.employess.push(kelvin); //podemos utilizar metodos que nos permitan empujar, los datos 
console.log(company)

