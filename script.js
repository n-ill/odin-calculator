const displayScreen = document.querySelector('.display-screen');

let isOperatorActive = false;
let firstNum = 0;
let operator = '';
let isMaxSize = false;

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', () => {
    displayScreen.textContent = '0';
    firstNum = 0;
    operator = '';
    isOperatorActive = false;
    isMaxSize = false;
});

const deleteButton = document.querySelector('.button-delete');
deleteButton.addEventListener('click', () => {
    if (displayScreen.textContent !== '0') {
        displayScreen.textContent = displayScreen.textContent.substring(0,
            displayScreen.textContent.length - 1);
    }
    if (displayScreen.textContent === '') {
        displayScreen.textContent = '0';
    }
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
        if (displayScreen.textContent.length === 16) {
            isMaxSize = true;
        }
        if (displayScreen.textContent === '0') {
            displayScreen.textContent = '';
        }
        if (isOperatorActive) {
            displayScreen.textContent = '';
            displayScreen.textContent += button.textContent;
            isOperatorActive = false;
            isMaxSize = false;
        }
        else {
            if (!isMaxSize) {
                displayScreen.textContent += button.textContent;
            }
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
        let result = firstNum + parseFloat(displayScreen.textContent);
        let resultStr = result.toString();

        // if (resultStr.includes('.')) {
        //     let decimalPlaces = resultStr.substring(resultStr.indexOf('.') + 1);
        //     result = result.toFixed(parseInt(decimalPlaces));
        // }

        displayScreen.textContent = result;
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
