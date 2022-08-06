//Math operators

function add (num1,num2) {
    return num1 + num2;
}

function subtract (num1,num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

// Operate function
function operate (operator, num1, num2) {
    if (operator === "+") {
        return add(num1,num2)
    } else if (operator === "-") {
        return subtract(num1,num2)
    } else if (operator === "*") {
        return multiply(num1,num2)
    } else {
        return divide(num1,num2)
    }
}

//Populate Display

function continueNumber (string) {
    calcStr += string;
    equation.textContent = calcStr;
}

function addFloat (string) {
    const currentNumber = calcStr.split(" ").slice(-1).join("");
    if (currentNumber.includes(".")) return;
    calcStr += string;
    equation.textContent = calcStr;
}


function addOperator (string) {
    if (calcStr.slice(-1) === ".") {
        calcStr = calcStr.slice(0,-1)
    }
    calcStr += ` ${string} `;
    equation.textContent = calcStr;
}

function allClear() {
    calcStr = "";
    equation.textContent = calcStr;
}

function clear(string) {
    if (string.slice(-1) === " ") {
    calcStr = string.slice(0,-2);
    } else {
        calcStr = string.slice(0,-1); 
    }
    equation.textContent = calcStr;
}

function calculateResult(string) {
    const array = string.split(" ");
    const operator = array[1];
    const num1 = parseFloat(array[0]);
    const num2 = parseFloat(array[2]);
    result = operate(operator,num1,num2);
    allClear();
    calcStr += result;
    equation.textContent = calcStr; 
}

// Variables & EventListeners

let calcStr = "";
const equation = document.querySelector(".equation");

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("numbers")) {
        continueNumber(e.target.textContent);
    } else if (e.target.classList.contains("operators")) {
        addOperator(e.target.textContent);
    } else if (e.target.classList.contains("float")) {
        addFloat(e.target.textContent);
    } else if (e.target.classList.contains("ac")) {
        allClear(e.target.textContent);
    } else if (e.target.classList.contains("c")) {
        clear(calcStr);
    } else if (e.target.classList.contains("equal")) {
        calculateResult(calcStr);
    }
});