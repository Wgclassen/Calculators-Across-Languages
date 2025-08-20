const screenNumber = document.querySelector(".screen");
const numberButton = document.querySelectorAll(".number");

function addNumber(button) {
    if (screenNumber.textContent === "0") {
        screenNumber.textContent = button.textContent;
    } else {
        screenNumber.textContent += button.textContent;
    }
}

numberButton.forEach(button => {
    button.addEventListener("click", () => addNumber(button));
});