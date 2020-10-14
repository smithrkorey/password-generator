// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Variable declaration
var confirmLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialCharacters;

//variable values
var lower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numeric = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var characters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "=", "<", ">", "/", ",", "." ]

// Receiving user input
var confirmLength = parseInt(prompt("Please enter a number to determine the password length. Length must be between 8 and 128 characters):")); 

if (confirmLength > 8 && confirmLength < 128) {
  confirmLowerCase = confirm("Will this contain lowercase letters?");
  confirmUpperCase = confirm("Will this contain uppercase letters?");
  confirmNumeric = confirm("Will this contain numbers?");
  confirmSpecialCharacters = confirm("Will this contain special characters?");

} else {
  alert("The length must be between 8 and 128!");
}




//Generator Functions

/*function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 120) + 56);
}

function getRandomCharacter() {
  const symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

