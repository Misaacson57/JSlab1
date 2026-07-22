function performOperation(){
    // get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //checks if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2) ){
        //perfprm the operation
        let result = multiply(num1, num2);

        //display the result
        displayResult(result);
    } else {
        displayResult('Enter Valid Numbers');
    }
}

function multiply(a, b){
    // introduce a debugger statement that pauses execuiton
    debugger;

    return a * b;
}


function performAdd(){
    // get user inputs
    debugger;
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);

    // check inputs are valid
    if (!isNaN(num1) && !isNaN(num2) ){
        // perform the operations

        let result = add(num1, num2);

        displayResult(result);
    } else {
        displayResult('Enter Valid numbers for float')
    }
}
function add(a,b){
    debugger;

    return a + b;
}
function performSub(){
    debugger;
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);

    // check inputs are valid
    if (!isNaN(num1) && !isNaN(num2) ){
        // perform the operations

        let result = sub(num1, num2);

        displayResult(result);
    } else {
        displayResult('Enter Valid numbers for float')
    }
}

function sub(a,b){
    debugger;

    return a - b;
}
function displayResult(result){
    // this will displaye the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}