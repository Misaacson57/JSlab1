const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

    //the function im making now wull display all EMployees and details
function displayEmployees(){
    const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
// map iterates through each emp in the array and ,makes a string for the emp details listed
// the .join('') turns it into  a single stirng by merging teh employee details without seperation
// all info stored into the total.Employees 


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert (`Total Salaries: $${totalSalaries}`);
}
// reduce method iterates through each loop and accumalates their salaires to calculate the total
// reduce method continuously accumulates these salaries by adding each emps salary to prev total

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
// code will filter employees array with .filter method for employees in HR dept and putinto new array

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }
// this part will look for employees details with the ID