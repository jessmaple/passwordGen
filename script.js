// Set static variables

var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

//  Prompt instruction for the user to begin

// window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Main function = Password Generation

function generatePass() {
  var allChars = [];
  var resultPass = "";

  var Totlength = prompt(
    "Choose a password length between 8 and 128 characters"
  );

  if (Totlength < 8 || Totlength > 128) {
    alert(
      "Please choose a number between 8 and 128 characters long!\nTry Again."
    );
  } else {
    if (
      confirm("Do you want to use uppercase letters?")
    ) {
      Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if (
      confirm("")
    ) {
      Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if (confirm("Would you like your password to contain numbers?")) {
      Array.prototype.push.apply(allChars, numArr);
    }

    if (confirm("Would you like your password to contain symbols?")) {
      Array.prototype.push.apply(allChars, symArr);
    }

    if (allChars.length === 0) {
      alert(
        "In order to generate a password, at least one character type must be selected"
      );
    } else {
      for (var i = 0; i < Totlength; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        resultPass += allChars[random];
      }
    }
  }

  document.getElementById("password").innerHTML = resultPass;
}

function copyPass() {
  document.querySelector("textarea").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
