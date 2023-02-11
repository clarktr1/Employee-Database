const indexjs = ('./index.js')


function generateIndex(data) {
    let p = ''
    for (let i = 0; i < data.length; i++){
        const employee = data[i]
        const officeNumber = employee.officeNumber;
        const school = employee.school;
        const github = employee.github;

        p += 
        `<div class="employee-card">
            <div class="title-container">
                <h2 class="title">${data[i].user}</h2>
                <h3 class="role">${data[i].role}</h3>
            </div>
            <div class="employee-info">
            <p>ID: ${data[i].id}</p>
            <p>Email: ${data[i].email}</p>
            ${officeNumber !== undefined ? `<p>Office Number: ${officeNumber}</p>` : ""}
            ${school !== undefined ? `<p>School: ${school}</p>` : ""}
            ${github !== undefined ? `<p>Github: <p><a href="https://github.com/${github}">${github}</a></p>` : ""}
        </div>
        </div>`
    }
    const html = 
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kumbh Sans">
        <title>Employee Database</title>
    </head>
    <body>
    <div class="header-bar"></div>
    <div class="employee-container">
        ${p}
    </div>
    </body>
    </html>`
    return html
}

module.exports = generateIndex;