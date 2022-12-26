defaultA = 0;
defaultB = 0;
defaultNum = 0;

let operands = [];
let a = defaultA;
let b = defaultB;
let num = defaultNum;
let operator;
let roundedAnswer;

let updateScreen = function() {
    let buttonId = this.id;
    if (screen.innerText === '') {
        screen.innerText = buttonId;
        num = Number(screen.innerText);
    } else {
        screen.innerText += buttonId;
        num = Number(screen.innerText);
    };
};

let storeValuesA = function() {
    a = num;
    operator = this.id;
    buttonId = this.id;
    screen.innerText += buttonId;
    num = 0;
    document.getElementById('.').disabled = false;
};

let storeValuesB = function() {
    let screenString = JSON.stringify(screen.innerText);
    let equalsSplitter = screenString.split('=')[0];
    let operatorSplitter = equalsSplitter.split(operator)[1];
    let lastNum = operatorSplitter.slice(0, -1);
    b = Number(lastNum);
    buttonId = this.id;
    screen.innerText += buttonId;
    num = 0;
    operate(operator, a, b);
};

let operate = function(operator, a, b) {
    operands = [a, b];
    if (operator === '+') {
        roundedAnswer = Math.round(addNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer
        num = screen.innerText;
    } else if (operator === '-') {
        roundedAnswer = Math.round(subtractNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer
        num = screen.innerText;
    } else if (operator === 'x') {
        roundedAnswer = Math.round(multiplyNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer
        num = screen.innerText;
    } else if (operator === '÷') {
        roundedAnswer = Math.round(divideNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer
        num = screen.innerText;
    };
};

let clearScreen = function() {
    a = defaultA;
    b = defaultB;
    num = defaultNum;
    screen.innerText = '';
    document.getElementById('.').disabled = false;
}

let addDecimal = function() {
    let buttonId = this.id;
    this.disabled = true;
    if (screen.innerText === '') {
        screen.innerText = '0';
        screen.innerText += buttonId;
        num = Number(screen.innerText);
    } else {
        screen.innerText += buttonId;
        num = Number(screen.innerText);
    };
};

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

const screen = document.getElementById('screen');
const zero = document.getElementById('0').addEventListener('click', updateScreen);
const one = document.getElementById('1').addEventListener('click', updateScreen);
const two = document.getElementById('2').addEventListener('click', updateScreen);
const three = document.getElementById('3').addEventListener('click', updateScreen);
const four = document.getElementById('4').addEventListener('click', updateScreen);
const five = document.getElementById('5').addEventListener('click', updateScreen);
const six = document.getElementById('6').addEventListener('click', updateScreen);
const seven = document.getElementById('7').addEventListener('click', updateScreen);
const eight = document.getElementById('8').addEventListener('click', updateScreen);
const nine = document.getElementById('9').addEventListener('click', updateScreen);
const decimal = document.getElementById('.').addEventListener('click', addDecimal);
const plus = document.getElementById('+').addEventListener('click', storeValuesA);
const minus = document.getElementById('-').addEventListener('click', storeValuesA);
const times = document.getElementById('x').addEventListener('click', storeValuesA);
const divide = document.getElementById('÷').addEventListener('click', storeValuesA);
const equals = document.getElementById('=').addEventListener('click', storeValuesB);
const del = document.getElementById('delete')//.addEventListener('click', )
const clear = document.getElementById('clear').addEventListener('click', clearScreen);
const btn = document.getElementsByClassName('btn');