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

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.getGitHub = () => {}
        this.getRole = () => {}
    }
}

    describe('Engineer', () => {
        it('Should return an object that includes the employee properties in addition to the engineer properties.', () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@MediaList.com', 'johndoe1')
            expect(engineer.name).toEqual('John Doe')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('johndoe@MediaList.com')
            expect(engineer.github).toEqual('johndoe1')
            expect(engineer.officeNumber).toEqual(undefined)
            expect(engineer.school).toEqual(undefined)
        })
    })