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

let operandOne;
let operandTwo;
let operator;

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