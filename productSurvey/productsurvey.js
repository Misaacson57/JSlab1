

const submitButton=document.getElementById('submitBtn');

function submitFeedback (){
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    document.getElementById('userName').innerHTML= username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
    // Above line of code uses JavaScript to access an HTML element identified by the ID 'userInfo'.
    // It then modifies the CSS style property 'display' of that element, setting it to 'block',
    // which alters its visibility on the webpage to be displayed as a block-level element.

    alert('Thank you for your valuable feedback')
}

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });