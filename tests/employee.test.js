class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        }
    };

    describe('Employee', () => {
        it('should create an Employee object with the correct properties', () => {
            const employee = new Employee('John Doe', 1, 'johndoe@email.com');
            expect(employee.name).toEqual('John Doe');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('johndoe@email.com');
        });
    });
    

