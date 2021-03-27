// Assignment Code
var enter
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Password Variables
// List of Special Characters
character =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Number Characters
number = [1,2,3,4,5,6,7,8,9];
// Alphabet Characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Space for uppercase
space =[];
//for different choices
var choices;
// change letters to uppercase
var toUpper = function(x) {
  return x.toUppercase();
};
// varibale for uppercasing
alpha2 = alpha.map(toUpper);

var get = document.querySelector("generate");

get.addEventListener("click",function(){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
