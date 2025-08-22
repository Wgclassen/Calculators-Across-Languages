// - DOM - //
const screenNumber = document.querySelector(".screen");
const numberButton = document.querySelectorAll(".number");
const cButton = document.querySelector(".c");
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus");
const timesButton = document.querySelector(".times");
const divideButton = document.querySelector(".divide");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");

const Operators = {
    PLUS: "plus",
    MINUS: "minus",
    DIVIDE: "divide",
    TIMES: "times"
};

let lastOperator;
let storedNumber;


// - Event Listeners - //
numberButton.forEach(button => {
    button.addEventListener("click", () => addNumber(button));
});
cButton.addEventListener("click", clearScreen);
// plusButton.addEventListener("click", addOperation);
plusButton.addEventListener("click", () => setOperation(Operators.PLUS));
minusButton.addEventListener("click", () => setOperation(Operators.MINUS));
timesButton.addEventListener("click", () => setOperation(Operators.TIMES));
divideButton.addEventListener("click", () => setOperation(Operators.DIVIDE));
equalsButton.addEventListener("click", performOperation);
deleteButton.addEventListener("click", erase);


// - Functions - //
function setOperation(Operator) {
    storedNumber = screenNumber.textContent;
    lastOperator = Operator;
    clearScreen();
}

function addNumber(button) {
    if (screenNumber.textContent === "0") {
        screenNumber.textContent = button.textContent;
    } else {
        screenNumber.textContent += button.textContent;
    }
}

function performOperation() {
    if (lastOperator == Operators.PLUS) {
        screenNumber.textContent = parseFloat(storedNumber) + parseFloat(screenNumber.textContent);
    }
    if (lastOperator == Operators.MINUS) {
        screenNumber.textContent = parseFloat(storedNumber) - parseFloat(screenNumber.textContent);
    }
    if (lastOperator == Operators.TIMES) {
        screenNumber.textContent = parseFloat(storedNumber) * parseFloat(screenNumber.textContent);
    }
    if (lastOperator == Operators.DIVIDE) {
        screenNumber.textContent = parseFloat(storedNumber) / parseFloat(screenNumber.textContent);
    }
}

function erase() {
    if (screenNumber.textContent.length > 1) {
        screenNumber.textContent = screenNumber.textContent.slice(0, -1);
    } else {
        clearScreen();
    }
}

function clearScreen() {
    screenNumber.textContent = "0";
}