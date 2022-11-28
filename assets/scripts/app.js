const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumerInput() {
    return parseInt(usrInput.value);
}

function add() {
    const enteredNumber = getUserNumerInput();
    calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);