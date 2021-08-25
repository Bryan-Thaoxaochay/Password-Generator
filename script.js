// Selecting Button
document.querySelector("#generate").addEventListener("click", passwordCriteria);

function passwordCriteria() {
  let length = prompt("How long should the password be? (Please input a number between 8 and 128, i.e. 8)");
  length = parseInt(length);

  let answerLowerCaseLetters = prompt("Do you want lowercase letters? (Please input yes or no)");
  answerLowerCaseLetters = answerLowerCaseLetters.toLowerCase();

  let answerUpperCaseLetters = prompt("Do you want uppercase letters? (Please input yes or no)");
  answerUpperCaseLetters = answerUpperCaseLetters.toLowerCase();

  let answerNumbers = prompt("Do you want numbers? (Please input yes or no)");
  answerNumbers = answerNumbers.toLowerCase();

  let answerSpecialCharacters = prompt("Do you want special characters? (Please input yes or no)");
  answerSpecialCharacters = answerSpecialCharacters.toLowerCase();

  const answerArray = [answerLowerCaseLetters, answerUpperCaseLetters, answerNumbers, answerSpecialCharacters];

  generatePassword(length, answerArray);
}

function generatePassword(length, answerArray) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '~'];
  const characterArray = [lowerCaseLetters, upperCaseLetters, numbers, specialCharacters];
  let password = [];

  for (let i = 0; i < length; i++) {
    answerArray.forEach((character, index) => {
      if (character === 'yes') {
        let addCharacter = characterArray[index][Math.floor(Math.random() * characterArray[index].length)];
        password.splice(Math.floor(Math.random() * length), 0, addCharacter);
      }
    })
    if (password.length >= length) {
      password.length = length;
      break;
    }
  }
  password = password.join('');
  displayPassword(password);
}

function displayPassword(password) {
  document.querySelector("#password").innerHTML = password;
}