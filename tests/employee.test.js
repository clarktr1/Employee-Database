const jest = require('jest');

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        }
    };

describe('Employee', () => {
    it('Should be able to output a JSON with name, id, and email');
    const employee = new Employee('John', '1', 'test@test.org');
    expect(employee.name).toEqual('John')
});