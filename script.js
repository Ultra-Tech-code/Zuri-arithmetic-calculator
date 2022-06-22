var firstNum = window.prompt("Enter First Number")
var secondNum = window.prompt("Enter Second Number")
var operation = window.prompt("Enter the operation you want to perform: +, -, *, /.")

let result;

if(isNaN(firstNum) || isNaN(secondNum)){
  alert("Input is not a number. Retry")
} else{
  if(operation == "+"){
    result = Number(firstNum) + Number(secondNum);
  }else if(operation == "-"){
    result = Number(firstNum) - Number(secondNum);
  }else if(operation == "*"){
    result = Number(firstNum) * Number(secondNum);
  }else if(operation == "/"){
    result = Number(firstNum) / Number(secondNum);
  }
  alert("Result: " + result)
}