class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getRole = () => {
            console.log(this.role);
        };
    };
};

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.getSchool = () => {}
        this.getRole = () => {}
    };
};

    describe('Intern', () => {
        it('Should return an object with the properties of Employee, in addition to the Intern properties.', () =>{
            const intern = new Intern('John Doe', 1, 'johndoe@MediaList.com', 'University of John')
            expect(intern.name).toEqual('John Doe')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('johndoe@MediaList.com')
            expect(intern.officeNumber).toEqual(undefined)
            expect(intern.school).toEqual('University of John')
        });
     });
 