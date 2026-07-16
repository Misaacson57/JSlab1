let length;
let width;

function calculateArea (){
    length = parseFloat(document.getElementById('length').value);
// .value: After accessing the HTML element, .value is used to retrieve the value entered into the input field associated with that element.
//  For instance, if a user enters '5' into the input field for length, .value retrieves the string '5'.

    width = parseFloat(document.getElementById('width').value);

    let area = width * length;

    document.getElementById('result').innerText = `The area of the rectangle is ${area}`;
    // the first part brings back the result id from the html file which is associated with the <p> tag
    // the .innerText is what i use to alter the text content in the HTML file
}

let amount;
let price;

function calculateTotal () {
    amount = parseFloat(document.getElementById('amount').value);
    price = parseFloat(document.getElementById('price').value);

    let total = price * amount;

    document.getElementById('totalPrice').innerText = `The total price is going to be: ${total}`;

}