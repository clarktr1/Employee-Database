const indexjs = ('./index.js')


function generateIndex(data) {
    for (let i = 0; i < data.length; i++){
        const employee = data
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Database</title>
    </head>
    <body>
        <p>${employee[0].user}</p
        <p>${employee[1].user}</p
        <p>${JSON.stringify(data[i])}</p
        <p>${data}</p
    </body>
    </html>`
}
}

module.exports = generateIndex;