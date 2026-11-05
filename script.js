function addition(a,b) {

return a + b;

}


function substract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a * b;
}

function divide(a,b)
{

return a / b;

}

let operandOne = 10;
let operandTwo = 0
let operator = "+";

function operate(numOne,numTwo,operator)
{
    
if(operator == "+")
{
    return addition(numOne,numTwo);
}
else if(operator == "-")
{
    return substract(a,b);
}
else if (operator == "x")
{
    return multiply(numOne,numTwo);
}
else if(operator == "÷")
{
    return divide(a,b);
}
else {
    console.log("Enter a valid operator");
    return;
}
}



const display = document.querySelector(".display");
const AC = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const op = document.querySelectorAll(".op");
const buttonsDiv = document.querySelector('.digits-operator');

const buttons = buttonsDiv.querySelectorAll('.digit');

// hover effect

buttons.forEach((button) => {

 button.addEventListener("mouseover",function() {

button.style.backgroundColor = "#5E5E5E";


 });
 
 button.addEventListener("mouseout",function() {

button.style.backgroundColor = "white";

 });
 

});

AC.addEventListener("mouseover",function() {

AC.style.backgroundColor = "#5E5E5E";


 });
 
AC.addEventListener("mouseout",function() {

AC.style.backgroundColor = "white";

 });

// clear display button event listener

AC.addEventListener("click", function(event) {

display.textContent = "";

});


// digits and operator events listeners


op.forEach((operator) => {

operator.addEventListener("click",function(event){

operator = event.target.textContent;

});

})

digits.forEach((digit) => {

digit.addEventListener("click",function(event){

display.textContent = event.target.textContent;
display.textContent += event.target.textContent;

});

});









