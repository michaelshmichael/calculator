const display = document.getElementById("display");
const numbers = Array.from(document.getElementsByClassName("numberButton"));
const operators = Array.from(document.getElementsByClassName("operatorButton"));
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

//let displayValue = "0";
let operatorValue = "";
let num1 = "";
let num2 = "";

display.textContent = "0";

numbers.forEach(function(number){
    number.addEventListener("click", function(){
        if(operatorValue === "") {
        num1 += number.textContent
        display.textContent = num1;
        } else {
        num2 += number.textContent
        display.textContent = num1 + operatorValue + num2;
        }
    })
})

operators.forEach(function(operator){
    operator.addEventListener("click", function(){
        operatorValue = operator.textContent;
        display.textContent = num1 + operatorValue;
    })
})

equals.addEventListener("click", function(){
    operate(operatorValue, num1, num2);
})


function add(num1, num2) {
    let total = parseFloat(num1) + parseFloat(num2);
    display.textContent = total;
}

function subtract(num1, num2) {
    let total = Math.round((parseFloat(num1) - parseFloat(num2)) * 100) / 100;
    display.textContent = total;
}

function multiply(num1, num2) {
    let total = Math.round((parseFloat(num1) * parseFloat(num2)) * 100) / 100;
    display.textContent = total;
}

function divide (num1, num2) {
    if(num2 === "0"){
        alert("Don't do that, asshole")
    } else {
        let total = Math.round((parseFloat(num1) / parseFloat(num2)) * 100) / 100;
        display.textContent = total;
    }
   
}

function operate (operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operation"
    }
}

clear.addEventListener("click", function(){
    display.textContent = "0";
    operatorValue = "";
    num1 = "";
    num2 = "";
})
