const inquirer = require('inquirer');

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
        this.getRole = () => {}
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.getGitHub = () => {}
        this.getRole = () => {}
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.getSchool = () => {}
        this.getRole = () => {}
    }
}

const promptUser = () => {
inquirer
    .prompt([
    {   
        type: 'input',
        message: "What is the employee's name?",
        name: 'user',
        validate: (input) => {
            if (!input) {
              return 'Name is required';
            } return true
        }
    },
    {   
        type: 'input',
        message: "What is the employee's ID",
        name: 'id',
        validate: (input) => {
            if (!input) {
              return 'ID is required';
            } return true
        }
    },
    {   
        type: 'input',
        message: "What is the employee's email?",
        name: 'email',
        validate: (input) => {
            if (!input) {
              return 'Email is required';
            } return true
        }
    },
    {   
        type: 'list',
        message: "What is the employee's role?",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {   
        type: 'input',
        message: "What is the employee's office number?",
        name: 'officeNumber',
        when: (answers) => answers.role === 'Manager',
    },
    {   
        type: 'input',
        message: "What is the employee's github?",
        name: 'github',
        when: (answers) => answers.role === 'Engineer',
    },
    {   
        type: 'input',
        message: "What is the employee's school?",
        name: 'school',
        when: (answers) => answers.role === 'Intern',
    },
    {   
        type: 'list',
        message: "Would you like to add another employee?",
        name: 'restart',
        choices: ['Yes', 'No']
    },
])

.then((answers) => { 
    const allUser = []
    if(answers.restart === 'Yes'){
        allUser.push(newUser);
        promptUser()} 
    if(answers.restart === 'No'){
        console.log(`Here's the added employees:`)
        console.log(answers.role);
    };
    if(answers.role === 'Manager'){
        const manager = new Manager(this.name, this.email, this.id, this.officeNumber)
        console.log(manager)
    }
});
}

promptUser()