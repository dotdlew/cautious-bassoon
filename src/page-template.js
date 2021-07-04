const Employee = require("../lib/Employee");

// Generates cards for each employee based on the array length and employee roles
const generateCards = (employeeArr) => {
  var result = "";
  for (var i = 0; i < employeeArr.length; i++) {
    if (employeeArr[i].role === "Manager") {
      result += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title">${employeeArr[i].name}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${employeeArr[i].role}  <i class="fas fa-clipboard-list"></i></h5>
                    <h6 class="card-subtitle mt-2 mb-2 text-muted">Employee ID: ${employeeArr[i].id}</h6>
                    <p class="card-text mb-2">Office Number: ${employeeArr[i].officeNumber}</p>
                    <a href="mailto:${employeeArr[i].email}" class="card-link mb-2">Email</a>
                </div>
            </div>  
            
            `;
    } else if (employeeArr[i].role === "Engineer") {
      result += ` 
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title">${employeeArr[i].name}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${employeeArr[i].role}  <i class="fas fa-cogs"></i></h5>
                    <h6 class="card-subtitle mt-2 mb-2 text-muted">Employee ID: ${employeeArr[i].id}</h6>
                    <p class="card-text mb-2">GitHub: <a href="https://github.com/${employeeArr[i].github}" class="card-link mb-2">${employeeArr[i].github}</a></p>
                    <a href="mailto:${employeeArr[i].email}" class="card-link">Email</a>
                </div>
            </div>  
            
            `;
    } else {
      result += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title">${employeeArr[i].name}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${employeeArr[i].role}  <i class="fas fa-coffee"></i></h5>
                    <h6 class="card-subtitle mt-2 mb-2 text-muted">Employee ID: ${employeeArr[i].id}</h6>
                    <p class="card-text mb-2">School: ${employeeArr[i].school}</p>
                    <a href="mailto:${employeeArr[i].email}" class="card-link">Email</a>
                </div>
            </div>  
            
            `;
    }
  }
  return result;
};

module.exports = (templateData) => {
  // Parse template data to return employees array
  templateData = JSON.parse(templateData);

  // destructure employees array
  const { employees } = templateData;

  // HTML template
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>

    <body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-center text-secondary bg-info text-light py-2 px-3">Team Profile Generator</h1>
        </div>
    </header>

    <main class="container my-1">
    <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-center text-secondary bg-info text-light py-2 px-3">My Team</h1>
    </div>  
        <div class="row d-flex justify-content-center">
        ${generateCards(employees)}
        </div>
    </main>

    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy ${new Date().getFullYear()} by Daniel Lewis</h3>
    </footer>
    </body>
    </html>
    `;
};
