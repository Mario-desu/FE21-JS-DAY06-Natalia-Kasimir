// Print each employee's details in a table which will look representative and easily readable for the management team.
let employeesData = JSON.parse(employees);
console.log(employeesData);
for (let employee in employeesData) {
    document.getElementById("inputTab").innerHTML +=
    `<tr>
          <td scope="col">${employeesData[employee].id}</td>
          <td scope="col">${employeesData[employee].firstName}</td>
          <td scope="col">${employeesData[employee].lastName}</td>
          <td scope="col">${employeesData[employee].email}</td>
          <td scope="col">${employeesData[employee].jobTitle}</td>
          <td scope="col">${employeesData[employee].salary}</td>
    </tr>`
};