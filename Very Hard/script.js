var num1 = parseInt(prompt("Please, enter a number."));

var operator = prompt(
  "Please, enter one of the following operators: + , - , * , /"
);

var num2 = parseInt(prompt("Please, enter a second number."));

function add(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

if (operator == "+") {
  console.log(num1 + " + " + num2 + " = " + add(num1, num2));
} else if (operator == "-") {
  console.log(num1 + " - " + num2 + " = " + subtraction(num1, num2));
} else if (operator == "*") {
  console.log(num1 + " * " + num2 + " = " + multiply(num1, num2));
} else if (operator == "/") {
  console.log(num1 + " / " + num2 + " = " + divide(num1, num2));
} else {
  alert("Verify you're using the correct operator.");
}
