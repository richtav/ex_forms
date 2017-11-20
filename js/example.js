// set variables that are needed for our functionality

var userInputBox = document.querySelector('#user-name-input');
var submitUserInput = document.querySelector('#submit-user-name');
var outputContainer = document.querySelector('#user-name-output');
//check to make sure elmeents exist before targeting them
if (userInputBox && submitUserInput && outputContainer) {
  // listen for a click even on the button to then preform our function
submitUserInput.addEventListener('click', function(event) {
  event.preventDefault();
  //Capture the value of the input element and store as a variable
    var userName = userInputBox.value;
    var outputMessage = "Welcome ";
    outputMessage += userName;
  outputMessage += "!";

  outputContainer.textContent = outputMessage;

});
}
