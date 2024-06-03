// Variable declaration
let cipheredMessage = "";

// Function declarations

// Function which returns a boolean true if 1 character string entered is a letter from the alphabet
function isLetter(char) {
  let asciiToCheck = char.charCodeAt(0);
  if (
    (asciiToCheck >= 65 && asciiToCheck <= 90) ||
    (asciiToCheck >= 97 && asciiToCheck <= 122)
  ) {
    return true;
  } else {
    return false;
  }
}

// Function which returns a character that is 15 letters ahead on the alphabet if it were cyclical.
function cipherCharacter(char) {
  let cipheredAscii = 0;
  let asciiToCipher = char.charCodeAt(0);
  // if statement for characters k and before in the alphabet
  if (asciiToCipher < 76 || (asciiToCipher >= 97 && asciiToCipher <= 107)) {
    cipheredAscii = asciiToCipher + 15;
    // else statement is for character l and after in the alphabet
  } else {
    cipheredAscii = asciiToCipher - 11;
  }
  // Change ciphereAscii into a string
  let cipheredCharacter = String.fromCharCode(cipheredAscii);
  return cipheredCharacter;
}

// Program starts
// Receive message from the user
let messageToCipher = prompt("Enter your message to be ciphered: ");

// Alert user if nothing was entered into the prompt
if (messageToCipher.trim().length == 0) {
  alert("Nothing was entered into the prompt, please refresh.");
} else {
  // Cipher the message by each character in the string
  for (i = 0; i < messageToCipher.length; i++) {
    let charToCipher = messageToCipher[i];
    // Checks if the letter is part of the alphabet, if not, it is not ciphered
    if (isLetter(charToCipher)) {
      let cipheredChar = cipherCharacter(charToCipher);
      cipheredMessage = cipheredMessage + cipheredChar;
    } else {
      cipheredMessage = cipheredMessage + charToCipher;
    }
  }

  // Output the ciphered message
  alert(cipheredMessage);
  console.log(cipheredMessage);
}
