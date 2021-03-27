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

// else if for negative responses
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
}
//else if statement that uses user input prompts after choices 
// else if for positive responses
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alpha, alpha2);
}

// else if for 3 positive responses
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alpha2);}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alpha);}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(alpha, alpha2);}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(alpha, alpha2);}

  // else if for 2 positive responses
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);}
else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);}
else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);}
else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);}
else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);  }

// else if for 1 positive response
else if (confirmCharacter) {
  choices = character;}
else if (confirmNumber) {
  choices = number;}
else if (confirmLowercase) {
  choices = alpha;}

// space var to fill uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
}
//password variable
  var password = [];

// for random variable:
// random selection for all variables
for (var i=0; i< enter;i++) {
  var pickChoices = choices[Math.floor(Math.random(*choices.length)];
  password.push(pickChoices);
}
//converts password array to string
var ps = password.join("");
UserInput (ps);
return ps;
}
//puts password into tect box
function UserInput(ps) {
  document.getElementById("password").textcontent = ps;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {copyPassword();
});

//copy password value
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard.");
}
