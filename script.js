var passInput = [];
var passLength = 12;
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "?", "+", "-"];
var finalPass = [];
// assignment code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  userPrompts();
}

//this function is to take user's info from user prompts and to proccess the password

var userInfo = userPrompts();

//this function is to prompt for user password info
function userPrompts() {
  var passLength = parseInt(prompt("How long you want your password to be?"));
  if (passLength < 8 || passLength > 128) {
    alert("Your number must be between 8 and 128");
    return false;
  }
  if (confirm("Would you like your password to contain lower case letters?")) {
    passInput = passInput.concat(lowerCase);
  }
  if (confirm("Would you like your password to contain upper case letters?")) {
    passInput = passInput.concat(upperCase);
  }

  if (confirm("Would you like your password to contain numbers?")) {
    passInput = passInput.concat(numbers);
  }

  if (confirm("Would you like your password to contain special characters?")) {
    passInput = passInput.concat(specChar);
  }
  console.log(passInput);

  for (var i = 0; i < passLength.length; i++) {
    passInput[Math.floor(Math.random() * passInput.length)];
  }
}
