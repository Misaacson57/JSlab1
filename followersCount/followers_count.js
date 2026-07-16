let count = 0; // Initialize count to 0

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}

function increaseCount (){
    count++;// Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function checkCountValue (){
    if (count === 10){
        alert("You've got 10 new followers");
    } else if (count === 20) {
        alert("You've got 20 followers");
    }

}