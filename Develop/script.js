// Assignment code here
var characters = {
  number: "0123456789",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!@#$%^&*(){}?+-<>=[]_~"
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var rawpassword = "";
  var passwordText = document.querySelector("#password");

  // password length input
  var passLength = prompt("What is the required character length of your password? Please enter a number between 8 and 128.");
     if (passLength < 8 || passLength > 128) {
       window.alert ("You must enter a number between 8 and 128. Please try again!");
       return writePassword();
    }
  
  // lowercase letters selection
  var lowercaseConfirm = window.confirm("Would you like to include LOWERCASE letters? If YES, select Okay. If NO, select Cancel.");
 
    if (lowercaseConfirm) {
      window.alert("You have selected LOWERCASE letters.");
      rawpassword += characters.lower;
  }
   else {
      window.alert("You have NOT selected LOWERCASE letters.")
  }

  // uppercase letters selection
  var uppercaseConfirm = window.confirm("Would you like to include UPPERCASE letters? If YES, select Okay. If NO, select Cancel.");

    if (uppercaseConfirm) {
      window.alert("You have selected UPPERCASE letters.");
      rawpassword += characters.upper;
    }
    else {
       window.alert("You have NOT selected UPPERCASE letters.")
    }

passwordText.value = password;
}

function generatePassword() {
  writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
