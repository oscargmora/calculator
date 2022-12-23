let operands = [];

let addNumbers = function(operands) {
    const sum = operands.reduce((newSum, newNumber) => newSum + newNumber);
    return sum;
};

let subtractNumbers = function(operands) {
    const subtraction = operands.reduce((newSum, newNumber) => newSum - newNumber);
    return subtraction;
};

let multiplyNumbers = function(operands) {
    const multiplication = operands.reduce((newSum, newNumber) => newSum * newNumber);
    return multiplication;
};

let divideNumbers = function(operands) {
    const division = operands.reduce((newSum, newNumber) => newSum / newNumber);
    return division;
};

let operate = function(operator, a, b) {
    operands = [a, b];
    if (operator === '+') {
        return addNumbers(operands);
    } else if (operator === '-') {
        return subtractNumbers(operands);
    } else if (operator === '*') {
        return multiplyNumbers(operands);
    } else if (operator === '/') {
        return divideNumbers(operands);
    };
};