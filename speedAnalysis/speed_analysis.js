let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
// this is how i can initialize two variables at once instead of create two lines i can do this as one

function startTest(){
    // this part sets the test text
    document.getElementById("inputText").value = testText;

    //Resets the users input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus(); // what this part does is means it is the active elemenet the keyboard will recieve so like typing

    document.getElementById("output").innerHTML = "";
    
    startTime = new Date().getTime();

}

function endTest(){
    endTime = new Date().getTime();// gets teh current time when test ends

    // this part disables the user from typing after input
    document.getElementById("userInput").readOnly = true;

    //Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // this will output time in seconds
    console.log(timeElapsed);
    
    var userTypedText = document.getElementById("userInput").value;
    console.log(userTypedText);

    //splits the text using regex to count words correctly

    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== ""; 
    }).length;
    console.log(typedWords);

    var wpm = 0;// Def value for words per minute (WPM)

    if (timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
        console.log(wpm);
    }

    var totalLength = userTypedText.length;

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>"
    + "<p>Words Per Minute - WPM: " + wpm + "</p>"
    + "<p>Total Length:" + totalLength + "</p>";
}