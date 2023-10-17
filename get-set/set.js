class Company {
  constructor(nameCompany) {
    this._nameCompany = nameCompany;
  }
}

class Employees extends Company {
  constructor(nameCompany, employee) {
    super(nameCompany);
    this._nameEmployee = employee;
  }

  get employee() {
    return `compania:${this._nameCompany}  empleado:${this._nameEmployee} `;
  }

  set words(word) {
    if (word.length > 4) return "trabajo muy malo";
    return word;
  }
}

const employee = new Employees("tecnologiMundi", "kelvin");
employee.words = 'programador'
console.log(employee.words);
