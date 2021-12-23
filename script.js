const displayScreen = document.querySelector('.display-screen');

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', () => { displayScreen.textContent = '' });

const numberButtons = document.querySelectorAll('.button-number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayScreen.textContent += button.textContent;
    })
});

let firstNum = 0;
let operator = '';

const equalButton = document.querySelector('.button-equal');
equalButton.addEventListener('click', equals);

const addButton = document.querySelector('.button-add');
addButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '+';
    displayScreen.textContent = '';
});

const subButton = document.querySelector('.button-sub');
subButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '-';
    displayScreen.textContent = '';
});

const multButton = document.querySelector('.button-mult');
multButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '*';
    displayScreen.textContent = '';
});

const divideButton = document.querySelector('.button-divide');
divideButton.addEventListener('click', () => {
    firstNum = parseInt(displayScreen.textContent);
    operator = '/';
    displayScreen.textContent = '';
});

function equals() {
    if (operator === '+') {
        displayScreen.textContent = firstNum + parseInt(displayScreen.textContent);
    }
    if (operator === '-') {
        displayScreen.textContent = firstNum - parseInt(displayScreen.textContent);
    }
    if (operator === '*') {
        displayScreen.textContent = firstNum * parseInt(displayScreen.textContent);
    }
    if (operator === '/') {
        displayScreen.textContent = firstNum / parseInt(displayScreen.textContent);
    }
}
