let operandOne = '';
let operandTwo = '';
let operator = "";
let checkOperatorClick;

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


function operate(numOne,numTwo,operator)
{
    
if(operator == "+")
{
    console.log("this is inside plus if statement");
    return addition(numOne,numTwo);
}
else if(operator == "-")
{
    return substract(numOne,numTwo);
}
else if (operator == "×")
{
    console.log("this is inside muliplication if statement");
    return multiply(numOne,numTwo);
}
else if(operator == "÷")
{
    return divide(numOne,numTwo);
}
}

function changeOperandOne(input)
{
   
   
   operandOne+=input;
   

}

function changeOperandTwo(input)
{
  
    operandTwo+=input;
    
}



const display = document.querySelector(".display");
const AC = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const ops = document.querySelectorAll(".op");
const buttonsDiv = document.querySelector('.digits-operator');
const equal = document.querySelector(".equal");

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
operandOne = '';
operandTwo = '';
operator = '';
checkOperatorClick = false;

});


// digits and operator events listeners

ops.forEach((op) => {

op.addEventListener("click",function(event){

if(operandOne != "" && operandTwo != "" && operator != "")
{
    let result = operate(Number(operandOne),Number(operandTwo),operator);
    if (Number.isInteger(result) == false)
    {
    let rounded = result.toFixed(2);
    result = rounded;
    }
    if(operator == "÷" && Number(operandTwo) == 0)
    {
      display.textContent = "Can not divide by zero"
      return;  
    }   
    display.textContent = result;
    operandOne = '';
    changeOperandOne(result);
    operandTwo = '';
}
operator = event.target.textContent;
checkOperatorClick = true;
console.log(operator);
console.log(typeof operator);

});

})

digits.forEach((digit) => {

digit.addEventListener("click",function(event){



if(checkOperatorClick == true)
{
     changeOperandTwo(event.target.textContent);
     display.textContent = operandTwo;
     console.log("operator two : " + operandTwo);    
}

else {
     changeOperandOne(event.target.textContent);
     display.textContent = operandOne;
     console.log("operator one : " + operandOne); 
}

});

});


equal.addEventListener("click",function() {

if(operandOne == '' || operandTwo == '')
{
    
    return;
}



let result = operate(Number(operandOne),Number(operandTwo),operator);

console.log("operand one : " + operandOne);
console.log("operand two : " + operandTwo);
console.log("operator : " + operator);
console.log(result);



if(operator == "÷" && Number(operandTwo) == 0)
{
    display.textContent = "Cannot divide by zero";  
}

else if (Number.isInteger(result) == false)
{
    let rounded = result.toFixed(2);
    display.textContent = rounded;
}

else {

  display.textContent = result;

}

});











