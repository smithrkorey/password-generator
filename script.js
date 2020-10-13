// Assignment Code
var generateBtn = document.querySelector("#generate");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

// Variable declaration
var confirmLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialCharacters;

// Receiving user input
var confirmLength = parseInt(prompt("Please enter a number to determine the password length. Length must be between 8 and 128 characters):")); 

if (confirmLength > 8 && confirmLength < 128) {
  confirmLowerCase = confirm("Will this contain lowercase letters?");
  confirmUpperCase = confirm("Will this contain uppercase letters?");
  confirmNumeric = confirm("Will this numbers?");
  confirmSpecialCharacters = confirm("Will this contain special characters?");

} else (confirmLength < 8 || confirmLength > 128) {
  alert("The length must be between 8 and 128!");
}


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  character: getRandomCharacter,
};

//Generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 120) + );
}

function getRandomCharacter() {
  const symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

writePassword();



