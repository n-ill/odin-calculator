const displayScreen = document.querySelector('.display-screen');

let isOperatorActive = false;
let firstNum = 0;
let operator = '';
let isScreenFull = false;

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', () => {
    displayScreen.textContent = '0';
    firstNum = 0;
    operator = '';
    isOperatorActive = false;
    isScreenFull = false;
});

const deleteButton = document.querySelector('.button-delete');
deleteButton.addEventListener('click', () => {
    if (displayScreen.textContent !== '0') {
        displayScreen.textContent = displayScreen.textContent.substring(0,
            displayScreen.textContent.length - 1);

        isScreenFull = false;
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
            isScreenFull = true;
        }
        if (displayScreen.textContent === '0') {
            displayScreen.textContent = '';
        }
        if (isOperatorActive) {
            displayScreen.textContent = '';
            displayScreen.textContent += button.textContent;
            isOperatorActive = false;
            isScreenFull = false;
        }
        else {
            if (!isScreenFull) {
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

function checkOverflow(aResult) {
    let resultStr = aResult.toString();

    if (resultStr.includes('.')) {
        let decimalPlaces = resultStr.substring(resultStr.indexOf('.') + 1).length;
        return aResult.toFixed(decimalPlaces - 1);
    }

    if (resultStr.length > 16) {
        return 'overflow';
    }

    return aResult;
}

function equals() {
    if (operator === '+') {
        let result = firstNum + parseFloat(displayScreen.textContent);

        displayScreen.textContent = checkOverflow(result);
    }
    if (operator === '-') {
        let result = firstNum - parseFloat(displayScreen.textContent);

        displayScreen.textContent = checkOverflow(result);
    }
    if (operator === '*') {
        let result = firstNum * parseFloat(displayScreen.textContent);

        displayScreen.textContent = checkOverflow(result);
    }
    if (operator === '/') {
        let result = firstNum / parseFloat(displayScreen.textContent);

        displayScreen.textContent = checkOverflow(result);
    }
}
