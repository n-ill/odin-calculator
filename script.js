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
    firstNum = parseInt(displayScreen.textContent);
    operator = '+';
    isOperatorActive = true;
    addButton.style.fontSize = '60px';
});

const subButton = document.querySelector('.button-sub');
subButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '-';
    isOperatorActive = true;
    subButton.style.fontSize = '60px';
});

const multButton = document.querySelector('.button-mult');
multButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '*';
    isOperatorActive = true;
    multButton.style.fontSize = '60px';
});

const divideButton = document.querySelector('.button-divide');
divideButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '/';
    isOperatorActive = true;
    divideButton.style.fontSize = '60px';
});

function equals() {
    if (operator === '+') {
        displayScreen.textContent = firstNum + parseInt(displayScreen.textContent);
        addButton.style.fontSize = '24px';
    }
    if (operator === '-') {
        displayScreen.textContent = firstNum - parseInt(displayScreen.textContent);
        subButton.style.fontSize = '24px';
    }
    if (operator === '*') {
        displayScreen.textContent = firstNum * parseInt(displayScreen.textContent);
        multButton.style.fontSize = '24px';
    }
    if (operator === '/') {
        displayScreen.textContent = firstNum / parseInt(displayScreen.textContent);
        divideButton.style.fontSize = '24px';
    }
}
