const displayScreen = document.querySelector('.display-screen');

let isOperatorActive = false;
let firstNum = 0;
let operator = '';

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', () => {
    displayScreen.textContent = '0';
    firstNum = 0;
    operator = '';
    isOperatorActive = false;
});

const decimalButton = document.querySelector('.button-decimal');
decimalButton.addEventListener('click', () => {
    if (displayScreen.textContent.includes('.')) {
        return
    }
    else {
        displayScreen.textContent += '.';
    }
});

const numberButtons = document.querySelectorAll('.button-number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayScreen.textContent === '0') {
            displayScreen.textContent = '';
        }
        if (isOperatorActive) {
            displayScreen.textContent = '';
            displayScreen.textContent += button.textContent;
            isOperatorActive = false;
        }
        else {
            displayScreen.textContent += button.textContent;
        }
    })
});

const equalButton = document.querySelector('.button-equal');
equalButton.addEventListener('click', equals);

const addButton = document.querySelector('.button-add');
addButton.addEventListener('click', () => {
    equals();
    operator = '+';
    firstNum = parseFloat(displayScreen.textContent);
    isOperatorActive = true;
});

const subButton = document.querySelector('.button-sub');
subButton.addEventListener('click', () => {
    equals();
    operator = '-';
    firstNum = parseFloat(displayScreen.textContent);
    isOperatorActive = true;
});

const multButton = document.querySelector('.button-mult');
multButton.addEventListener('click', () => {
    equals();
    operator = '*';
    firstNum = parseFloat(displayScreen.textContent);
    isOperatorActive = true;
});

const divideButton = document.querySelector('.button-divide');
divideButton.addEventListener('click', () => {
    equals();
    operator = '/';
    firstNum = parseFloat(displayScreen.textContent);
    isOperatorActive = true;
});

function equals() {
    if (operator === '+') {
        displayScreen.textContent = firstNum + parseFloat(displayScreen.textContent);
    }
    if (operator === '-') {
        displayScreen.textContent = firstNum - parseFloat(displayScreen.textContent);
    }
    if (operator === '*') {
        displayScreen.textContent = firstNum * parseFloat(displayScreen.textContent);
    }
    if (operator === '/') {
        displayScreen.textContent = firstNum / parseFloat(displayScreen.textContent);
    }
}


