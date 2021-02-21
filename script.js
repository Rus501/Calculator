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
    return operator(a, b)
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(btn => {
    btn.onclick = function() {
        if (display.innerHTML === '0') {display.innerHTML = ''}
        display.innerHTML += btn.innerHTML;
    }
});

const display = document.querySelector('.display');