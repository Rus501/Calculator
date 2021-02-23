//variables initialization
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('#operation');
const display = document.querySelector('.display');
const plus = document.querySelector('.add');
const minus = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldResetScreen = false;

clearButton.onclick = clear;
equalButton.onclick = evaluate;

numberButtons.forEach(btn => {
    btn.onclick = () => addNumber(btn.innerText);
});

operationButtons.forEach(btn => {
    btn.onclick = () => setOperation(btn.innerText);
});

function addNumber(number) {
    if (display.innerText === '0' || shouldResetScreen) resetDisplay();
    display.innerText += number;
}

function resetDisplay() {
    display.innerText = '';
    shouldResetScreen = false;
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate();
    firstNumber = display.innerText;
    currentOperation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null) return;
    if (currentOperation === '/' && display.innerText === '0') {
        alert("You can't divide by 0");
        clear();
        return;
    }
    secondNumber = display.innerText;
    display.innerText = roundResult(
        operate(currentOperation, firstNumber, secondNumber)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 100) / 100;
}

function clear() {
    display.innerText = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }
}