// Assignment code here

function generatePassword() {
  var length = prompt("How many characters do you want your password to be?");
  console.log(length);
  if (length < 8 || length > 128) {
    var newLength = prompt("Length must be between 8 and 128");
    console.log(newLength);
  };

  var capital = confirm("Would you like to include capital letters?");
  console.log(capital);

  var lower = confirm("Would you like to include lower case letters?");
  console.log(lower);

  var numeric = confirm("Would you like to include numbers?");
  console.log(numeric);

  var specialChar = confirm("Would you like to include special characters?");
  console.log(specialChar);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate") 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
