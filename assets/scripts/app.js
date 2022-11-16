const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1,8);

add(1, 3);
add(1, 4);

outputResult(currentResult, calculationDescrition);

