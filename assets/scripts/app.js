const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);