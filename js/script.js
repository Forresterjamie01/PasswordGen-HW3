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
function generatePassword() {
  //Ask user for input
  enter = parseInt(prompt("Please choose between 8 and 128 characters for your password."));
  // If statement for user input
  if (!enter) {
    alert("This needs a value!");
  } else if (enter <8|| enter >128){
    //Confirm user input

    // Beginning user input prompts
    enter = parseInt(promt("Your password must be between 8 and 128 characters."))
  } else {
    // Confirms when user input is validated.
    confirmNumber= confirm("Do you want this password to contain special characters?");
    confirmCharacter= confirm("Do you want this password to contain special characters?");
    confirmUppercase= confirm("Do you want this password to contain Uppercase Letters?");
    confirmLowercase= confirm("Do you want this password to contain Lowercase Letters?");
  };
//else if statement that uses user input prompts to determine choices 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
