// calculator.js

let firstNumber = "";
let secondNumber = "";
let operator = "";  
let EnterSecondNumber = false; 
let result = 0.0; 

function addNumber(number) {
    if (!EnterSecondNumber || operator ==="") {
        firstNumber += number.toString(); 
    } else {
        secondNumber += number.toString();
    }
}

function selectOperator(ops) {
    if (firstNumber !== "") {
        if(secondNumber !== "") computeNumber(); 
        operator = ops.toString(); 
        EnterSecondNumber = true; 
    }
}

function sliceNumber() {
    if (firstNumber !=="" && operator === "" && secondNumber === "") {
        firstNumber = firstNumber.toString().slice(0, -1); 
    } 
    if(operator !=="" && firstNumber !== "" && secondNumber === "") {
        operator = operator.toString().slice(0, -1); 
    }
    if(firstNumber !=="" && operator !== "" && secondNumber !== "") {
        secondNumber = secondNumber.toString().slice(0, -1); 
    } 
    displayContent();
}

function displayContent() {
    const firstNumberText = document.querySelector('.first-number');
    const secondNumberText = document.querySelector('.second-number');
    const operatorText = document.querySelector('.ops');

    if (firstNumberText) firstNumberText.innerHTML = firstNumber;
    if (secondNumberText) secondNumberText.innerHTML = secondNumber;
    if (operatorText) operatorText.innerHTML = operator;
}

function computeNumber() {
    let first = parseFloat(firstNumber); 
    let second = parseFloat(secondNumber);  
    switch (operator) {
        case "+":
            result = first + second;
            firstNumber = result.toString(); 
            break;
        case "-":
            result = first - second;
            firstNumber = result.toString();
            break;
        case "*":
            result = first * second;
            firstNumber = result.toString();
            break;
        case "/":
            result = first / second;
            firstNumber = result.toString();
            break;
        default:
            firstNumber = result.toString() ; 
            break;
    }
    secondNumber = ""; 
    operator = "";
    EnterSecondNumber = false;  
    displayContent(); 
}

function setupEvents() {
    const numberBtn = document.querySelectorAll('.number');
    const operatorBtn = document.querySelectorAll('.operator');
    const clearBtn = document.querySelector('.clearAll');
    const deleteBtn = document.querySelector('.delete');  
    const resultBtn = document.querySelector('.equal'); 

    numberBtn.forEach(element => {
        element.addEventListener("click", () => {
            addNumber(element.innerHTML); 
            displayContent(); 
        });
    });

    operatorBtn.forEach(element => {
        element.addEventListener("click", () => {
             selectOperator(element.innerHTML); 
             displayContent(); 
        });
    });

    if (resultBtn) {
        resultBtn.addEventListener("click", () => {
            computeNumber(); 
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            firstNumber = "";
            secondNumber = "";
            operator = "";  
            EnterSecondNumber = false; 
            result = 0.0; 
            displayContent(); 
        });
    }

    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            sliceNumber(); 
        });
    }
}
setupEvents();

module.exports = {setupEvents}; 
