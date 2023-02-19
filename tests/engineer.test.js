class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        }
    };

class Engineer extends Employee{
    constructor(name, id, email, github, role){
        super(name, id, email);
        this.github = github;
        this.role = role;
    }
}

    describe('Engineer', () => {
        it('Should return an object that includes the employee properties in addition to the engineer properties.', () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@MediaList.com', 'johndoe1', 'Engineer')
            expect(engineer.name).toEqual('John Doe')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('johndoe@MediaList.com')
            expect(engineer.github).toEqual('johndoe1')
            expect(engineer.role).toEqual('Engineer')
            expect(engineer.officeNumber).toEqual(undefined)
            expect(engineer.school).toEqual(undefined)
        })
    })