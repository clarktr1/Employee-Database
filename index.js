const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.getName = () => {
        console.log(this.name)
    }
    this.getId = () => {
        console.log(id)
    }
    this.getEmail = () => {
        console.log(email)
    }
    this.getRole = () => {
        if (this.role === 'manager'){
            console.log('manager')
        }
    }
};
};

class Manager extends Employee{

}

inquirer
    .prompt([
    {   
        type: 'input',
        message: "What is the employee's name?",
        name: 'user',
    },
    {   
        type: 'input',
        message: "What is the employee's ID",
        name: 'id',
    },
    {   
        type: 'input',
        message: "What is the employee's email?",
        name: 'email',
    },
    {   
        type: 'input',
        message: "What is the employee's role?",
        name: 'role',
    },
])
.then((response) => {
    const allUsers = [];
    const newUser = new Employee(response.user, response.id, response.email, response.role);
    newUser.getEmail()
    });


