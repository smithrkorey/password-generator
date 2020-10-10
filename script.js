// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

//Variable declaration
var confirmLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialCharacters;

//Receiving user input
var confirmLength = prompt("Please enter a number to determine the password length. Length must be between 8 and 128 characters):");

if (confirmLength) {
  

} else (confirmLength < 8 || confirmLength > 128) {
  
} else if (enter < 8 || enter > 128) {
  //prompt "The number must be between 8 and 128"
}

