let passwordOutput = document.getElementById("password");

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+[]{};:,.<>?/";

  let allowedChars = "";
  let password = "";

  // Add selected character sets
  allowedChars += includeLowercase ? lowerCaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  // Validation
  if (length <= 0) {
    return "Password length must be at least 1!";
  }
  if (allowedChars.length === 0) {
    return "At least one character set must be selected!";
  }

  // Generate password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

//   return password;
  passwordOutput.innerHTML = password;
}


