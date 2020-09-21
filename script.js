const display = document.getElementById("display");
const numbers = Array.from(document.getElementsByClassName("numberButton"));
const operators = Array.from(document.getElementsByClassName("operatorButton"));
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const undo = document.getElementById("undo");

let operatorValue = "";
let num1 = "";
let num2 = "";
let displayText = "";

// entering number values into the display
numbers.forEach(function(number){
    number.addEventListener("click", function(){
        if(operatorValue === "") {
            num1 += number.textContent;
            display.textContent = num1;
        } else {
            num2 += number.textContent;
            display.textContent = num1 + operatorValue + num2;
        }   
    })
})

// decimal treated as separate number
decimal.addEventListener("click", function(){
if(operatorValue === ""){
        num1 += decimal.textContent;
        display.textContent = num1;
        decimal.disabled = true;
    } else {
        num2 += decimal.textContent;
        display.textContent = num1 + operatorValue + num2;
        decimal.disabled = true;
    }   
})

// entering operators into the display
operators.forEach(function(operator){
    operator.addEventListener("click", function(){
        decimal.disabled = false;
        operatorValue = operator.textContent;
        display.textContent = num1 + operatorValue;
    })
})

// deletes the previous entry in the display
undo.addEventListener("click", function(){
    if(num2 != "") {
        num2 = num2.slice(0, -1)
        if(num2.indexOf(".") !=-1){
            decimal.disabled = true;
        } else {
            decimal.disabled = false;
        }
        display.textContent = num1 + operatorValue + num2;
    } else if(operatorValue != ""){
        operatorValue === "";
        display.textContent = num1
    } else if(num1 != ""){
        num1 = num1.slice(0, -1);
        if(num1.indexOf(".") !=-1){
            decimal.disabled = true;
        } else {
            decimal.disabled = false;
        }
        display.textContent = num1;
    }
})

// calls the operator function and finds solution
equals.addEventListener("click", function(){
    if(operatorValue === "" || num2 === ""){
        alert("Invalid, please check your input")
    } else {
    operate(operatorValue, num1, num2);
    num1 = display.textContent;
    num2 = "";
    operatorValue = "";
    decimal.disabled = false;
    }
})

// switch function to evaluate the final sum 
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

// separate functions that are fed into the switch
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

// clears the entire display and resets all values
clear.addEventListener("click", function(){
    decimal.disabled = false;
    display.textContent = "0";
    operatorValue = "";
    num1 = "";
    num2 = "";
})
