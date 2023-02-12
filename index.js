const inquirer = require('inquirer');
const fs = require('fs');
const generateIndex = require('./generateIndex')

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

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const allUser = []

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
            } else if (!/^[a-z A-Z]+$/.test(input)) {
                return 'Name should only container letters';
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
            } else if (!/^\d+$/.test(input)) {
                return 'ID should be a number';
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
            } else if(!validateEmail(input)){
                return 'This is not a valid email'
            }   return true
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
        validate: (input) => {
            if (!input) {
                return 'Office Number is required';
              } else if (!/^\d+$/.test(input)) {
                  return 'Office Number should be only numbers';
              } return true
        }
    },
    {   
        type: 'input',
        message: "What is the employee's github?",
        name: 'github',
        when: (answers) => answers.role === 'Engineer',
        validate: (input) => {
            if (!input) {
              return 'Github username is required';
            } return true
        }
    },
    {   
        type: 'input',
        message: "What is the employee's school?",
        name: 'school',
        when: (answers) => answers.role === 'Intern',
        validate: (input) => {
            if (!input) {
              return 'School name is required';
            } return true
        }
    },
    {
    type: 'confirm',
    message: "Would you like to add another employee?",
    name: 'restart',
    },
]).then(answers => {
    allUser.push(answers)
    if (answers.restart === true){
        promptUser()
    } else {
        console.log(allUser);
        const employeeList = generateIndex(allUser)
        
        fs.writeFile('./public/index.html', employeeList, function(err) {
            return err ? console.error(err) : console.log('Success!')
        })
    }
})
};


promptUser()