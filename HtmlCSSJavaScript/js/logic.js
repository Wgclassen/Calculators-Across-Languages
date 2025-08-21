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

numberButton.forEach(button => {
    button.addEventListener("click", () => addNumber(button));
});
cButton.addEventListener("click", clearScreen);
plusButton.addEventListener("click", addOperation);


function addOperation() {
    let firstNumber = screenNumber.textContent;
    clearScreen();
}

function addNumber(button) {
    if (screenNumber.textContent === "0") {
        screenNumber.textContent = button.textContent;
    } else {
        screenNumber.textContent += button.textContent;
    }
}

function clearScreen() {
    screenNumber.textContent = "0";
    adjustFontSize();
}