defaultA = '';
defaultB = '';
defaultNum = '';
defaultScreen = 0;
defaultOperator = '';

let operands = [];
let a = defaultA;
let b = defaultB;
let num = defaultNum;
let operator = defaultOperator;
let roundedAnswer;

let updateScreen = function() {
    let buttonId = this.id;
    if (screen.innerText === '0') {
        screen.innerText = buttonId;
        num = Number(screen.innerText);
    } else {
        screen.innerText += buttonId;
        num = Number(screen.innerText);
    };
};

let storeValuesA = function() {
    storeValuesB();
    a = num;
    operator = this.id;
    buttonId = this.id;
    screen.innerText += buttonId;
    num = defaultNum;
    document.getElementById('.').disabled = false;
    topScreen.innerText = screen.innerText;
};

let storeValuesB = function() {
    if (a === '') return;
    let screenString = JSON.stringify(screen.innerText);
    let equalsSplitter = screenString.split('=')[0];
    let operatorSplitter = equalsSplitter.split(operator)[1];
    if (operatorSplitter === undefined || a === undefined) {
        return;
    } else {
        let lastNum = operatorSplitter.slice(0, -1);
        b = Number(lastNum);
        buttonId = this.id;
        topScreen.innerText = screen.innerText + '=';
        screen.innerText += buttonId;
        num = defaultNum;
        operate(operator, a, b);
    };
};

let operate = function(operator, a, b) {
    operands = [a, b];
    if (operator === '+') {
        roundedAnswer = Math.round(addNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer;
        num = Number(screen.innerText);
    } else if (operator === '-') {
        roundedAnswer = Math.round(subtractNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer;
        num = Number(screen.innerText);
    } else if (operator === 'x') {
        roundedAnswer = Math.round(multiplyNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer;
        num = Number(screen.innerText);
    } else if (operator === '÷') {
        roundedAnswer = Math.round(divideNumbers(operands) * 100000) / 100000;
        screen.innerText = roundedAnswer;
        num = Number(screen.innerText);
        if (b === 0) {
            screen.innerText = 'Error';
        };
    };
 };

let clearScreen = function() {
    a = defaultA;
    b = defaultB;
    num = defaultNum;
    operator = defaultOperator;
    screen.innerText = '0';
    topScreen.innerText = '';
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

let deleteLastEntry = function() {
    if (screen.innerText === '0') {
        return;
    } else if (screen.innerText === '1' || screen.innerText === '2' || screen.innerText === '3' || screen.innerText === '4' || screen.innerText === '5' || screen.innerText === '6' || screen.innerText === '7' || screen.innerText === '8' || screen.innerText === '9') {
        screen.innerText = '0';
        topScreen.innerText = screen.innerText;
    } else if (screen.innerText === 'Error') {
        return clearScreen();
    } else {
        slicedString = screen.innerText.slice(0, -1);
        screen.innerText = slicedString;
        num = Number(screen.innerText);
        a = num;
        topScreen.innerText = screen.innerText;
    };
};

const topScreen = document.getElementById('topScreen');
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
const del = document.getElementById('delete').addEventListener('click', deleteLastEntry);
const clear = document.getElementById('clear').addEventListener('click', clearScreen);
const btn = document.getElementsByClassName('btn');

window.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) document.getElementById(`${e.key}`).click();
    if (e.key === '.' || e.key === '+' || e.key === '-') document.getElementById(`${e.key}`).click();
    if (e.key === '*') document.getElementById('x').click();
    if (e.key === '/') document.getElementById('÷').click();
    if (e.key === 'Enter') storeValuesB();
    if (e.key === 'Backspace') deleteLastEntry();
    if (e.key === 'Escape') clearScreen();
};