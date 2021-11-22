// Assignment code here

function generatePassword() {
  var length = prompt("How many characters do you want your password to be?");
    console.log(length);
  if (length < 8 || length > 128) {
    var length = prompt("Length must be between 8 and 128");
    console.log(length);
  };

  var capital = confirm("Would you like to include capital letters?");
    console.log(capital);

  var lower = confirm("Would you like to include lower case letters?");
    console.log(lower);

  var numeric = confirm("Would you like to include numbers?");
  console.log(numeric);

  var specialChar = confirm("Would you like to include special characters?");
    console.log(specialChar);

  let caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let index = Math.floor(Math.random()*caps.length)
  console.log(index);
  

  let lows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log(lows[10]);

  let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    console.log(num[6]);

  let spec = ['!', '@', '#', '$', '%', '&', '*'];
    console.log(spec[1]);

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
