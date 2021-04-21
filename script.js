function getPassword(){
  var chars = "01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()/?+_|}{:}";
  var passwordlength = 8-128;
  var password = "";
  
  for (var i=0; i<passwordlength; i++){
    var randomNumber = Math.floor(Math.random()* chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }

}

document.getElementById("yoursecurepassword").value = yoursecurepassword

