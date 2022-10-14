const themeOptions = document.querySelectorAll('input[type="radio"]');
const nums = document.querySelectorAll('.btn-num');
const screen = document.querySelector('.result-container');
const operators = document.querySelectorAll('.btn-operator');
const reset = document.querySelector('#reset');
const equal = document.querySelector('#equal');

let firstNum = "";
let secondNum = "";
let operator = "";
function applyTheme() {
    let elements = [document.querySelector('main'),
    document.querySelector('.options-container'),
    document.querySelector('.keyboard-container'),
    document.querySelector('.result-container'),
    ...document.querySelectorAll('span'),
    ...document.querySelectorAll('.calc-button'),
    document.querySelector('input[type="radio"]:checked + label .options')];
    const value = document.querySelector('input[type="radio"]:checked').value;

    for (let idx = 1; idx <= 3; idx++) {
        if (parseInt(value) === idx) {
            for (let element of elements) {
                element.classList.add(`theme-${idx}`);
            }
        }
        else {
            for (let element of elements) {
                element.classList.remove(`theme-${idx}`);
            }
        }
    }

}

function calculate() {
    let result = 0;
    if (firstNum && secondNum && operator) {
        switch (operator) {
            case "+":
                result = parseFloat(firstNum) + parseFloat(secondNum);
                break;
            case "-":
                result = parseFloat(firstNum) - parseFloat(secondNum);
                break;
            case "×":
                result = parseFloat(firstNum) * parseFloat(secondNum);
                break;
            case "/":
                result = parseFloat(firstNum) / parseFloat(secondNum);
                break;
        }
        firstNum = result.toString();
        secondNum = "";
        screen.innerText = result;
    }
}

for (let option of themeOptions) {
    option.addEventListener('input', applyTheme);
}

for (let num of nums) {
    num.addEventListener('click', function () {
        if (!operator) {
            if ((num.innerText !== ".") || (num.innerText === "." && !firstNum.includes("."))) {
                firstNum += num.innerText;
                screen.innerText = firstNum;
            }

        }
        else {
            if ((num.innerText !== ".") || (num.innerText === "." && !secondNum.includes("."))) {
                secondNum += num.innerText;
                screen.innerText = `${firstNum} ${operator} ${secondNum}`;
            }
        }
    })
}

for (let op of operators) {
    op.addEventListener('click', function () {
        calculate();
        screen.innerText += (" " + op.innerText);
        operator = op.innerText;
    })
}

reset.addEventListener('click', function () {
    firstNum = "";
    secondNum = "";
    operator = "";
    screen.innerText = "0";
})

equal.addEventListener('click', calculate);
applyTheme();