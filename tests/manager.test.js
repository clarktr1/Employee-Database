class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getRole = () => {
            console.log(this.role);
        }
    };
};

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.getRole = () => {
            return answer.role
        }
    }
}

    describe('Manager', () => {
        it('Should return an object that includes the Employee properties in addition to the Manager properties', () => {
            const manager = new Manager('John Doe', 1, 'johndoe@MediaList.com', '843-5413-6531')
            expect(manager.name).toEqual('John Doe')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('johndoe@MediaList.com')
            expect(manager.officeNumber).toEqual('843-5413-6531')
        })
    })