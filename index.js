const calculateButton = document.getElementById("calculate");
const resultDisplay = document.getElementById("result");
const operationButtons = document.querySelectorAll(".operation-buttons button");
let selectedOperation = null;

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        operationButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedOperation = button.getAttribute("data-operation");
    });
});

calculateButton.addEventListener("click", () => {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);

    if (isNaN(value1) || isNaN(value2)) {
        resultDisplay.textContent = "Result: Please enter valid numbers";
        return;
    }

    if (!selectedOperation) {
        resultDisplay.textContent = "Result: Please select an operation";
        return;
    }

    let faultyResult;
    switch (selectedOperation) {
        case "add":
            faultyResult = value2 + 14;
            break;
        case "subtract":
            faultyResult = value2 - 14;
            break;
        case "multiply":
            faultyResult = value2 * 14;
            break;
        case "divide":
            faultyResult = value2 / 14;
            break;
        default:
            resultDisplay.textContent = "Result: Unknown operation";
            return;
    }

    resultDisplay.textContent = `Result: ${faultyResult}`;
});