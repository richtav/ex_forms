// set variables that are needed for our functionality

var userInputBox = document.querySelector('#user-noun-input');
var userAdjectiveBox = document.querySelector('#user-adjective-input');
var userVerbBox = document.querySelector('#user-verb-input');
var submitUserInput = document.querySelector('#submit-user-word');
var outputContainer = document.querySelector('#user-word-output');
//check to make sure elmeents exist before targeting them
if (userInputBox && submitUserInput && outputContainer) {
  // listen for a click even on the button to then preform our function
submitUserInput.addEventListener('click', function(event) {
  event.preventDefault();
  //Capture the value of the input element and store as a variable
    var userNoun = userInputBox.value;
    var userAdjective = userAdjectiveBox.value;
    var userVerb = userVerbBox.value;
    var outputMessage = "There was a ";
    outputMessage += userNoun + " who was very " + userAdjective + " and loved to " + userVerb;

  outputMessage += "!";

  outputContainer.textContent = outputMessage;

});
}
