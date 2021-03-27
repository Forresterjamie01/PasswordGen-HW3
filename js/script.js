// Assignment Code
var enter
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Write password to the #password input
// List of Special Characters
character =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Number Characters
number = [1,2,3,4,5,6,7,8,9];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
