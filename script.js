const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numberElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "~!@#$%^&*?/.+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function updateTextInput(val) {
  document.getElementById("textInput").value = val;
}

function displayResult() {
  var passGenerate = "";

  if (
    uppercaseElement.checked ||
    lowercaseElement.checked ||
    numberElement.checked ||
    symbolsElement.checked
  ) {
    while (passGenerate.length < lengthElement.value) {
      if (
        uppercaseElement.checked &&
        passGenerate.length < lengthElement.value
      ) {
        passGenerate += getRandomUpper();
      }

      if (
        lowercaseElement.checked &&
        passGenerate.length < lengthElement.value
      ) {
        passGenerate += getRandomLower();
      }

      if (numberElement.checked && passGenerate.length < lengthElement.value) {
        passGenerate += getRandomNumber();
      }

      if (symbolsElement.checked && passGenerate.length < lengthElement.value) {
        passGenerate += getRandomSymbol();
      }
    }
  } else {
    //alert("Please Select Checkbox....");
    const display = document.getElementById("display").innerHTML = "Please Select Options...What you required for your password ! Either the Combination of Uppercase,Lowercase,Symbols or Numbers";
  }

  resultElement.innerHTML = passGenerate;
}

generateElement.addEventListener("click", displayResult);


clipboardElement.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const pass = resultElement.innerHTML;

  if (!pass) {
    return;
  }
  textarea.value = pass;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
