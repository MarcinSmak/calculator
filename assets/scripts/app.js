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

function substract() {
    const enteredNumber2 = getUserNumerInput();
    calcDescription = `${currentResult} - ${enteredNumber2}`;
    currentResult = currentResult - enteredNumber2;
    outputResult(currentResult, calcDescription);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);