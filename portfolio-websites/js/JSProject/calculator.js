const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstvalue = null;
let operator = null;
let waitingforsecondvalue = false;

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}

keys.addEventListener("click", function (e) {
  const element = e.target;
  const value = element.value;
  if (!element.matches("button")) return;

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      handleoperator(value);
      break;
    case ".":
      inputdecimal();
      break;
    case "clear":
      clear();
      break;
    default:
      inputNumber(element.value);
  }

  updateDisplay();
});

function handleoperator(nextoperator) {
  const value = parseFloat(displayValue);

  if (operator && waitingforsecondvalue) {
    operator = nextoperator;
    return;
  }

  if (firstvalue === null) {
    firstvalue = value;
  } else if (operator) {
    const result = calculate(firstvalue, value, operator);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstvalue = result;
  }

  waitingforsecondvalue = true;
  operator = nextoperator;
}

function calculate(first, second, operator) {
  if (operator === "+") {
    return first + second;
  } else if (operator === "-") {
    return first - second;
  } else if (operator === "*") {
    return first * second;
  } else if (operator === "/") {
    return first / second;
  }
  return second;
}

function inputNumber(num) {
  if (waitingforsecondvalue) {
    displayValue = num;
    waitingforsecondvalue = false;
  } else {
    displayValue = displayValue === "0" ? num : displayValue + num;
  }
}
function inputdecimal() {
  if (!displayValue.includes(",")) {
    displayValue += ",";
  }
}

function clear() {
  displayValue = "0";
}
