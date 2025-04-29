// Q1. Variables - Sum Two Numbers Problem: Create two variables a and b. Set a = 5 and b = 10. Print the sum of a and b.

let a = 5;
let b = 10;
let sum = a + b;
console.log("The sum of a and b is: " + sum);
document.getElementById("q1").innerHTML = `The sum of a and b is: ${sum}`


// Q2. Functions - Add Two Numbers Problem: Create a function addNumbers(x, y) that returns the sum of two numbers.

function addNumbers(x, y){
    return x + y
}
document.getElementById("calc").addEventListener("click",function(){
    let firstNumber = parseFloat(document.getElementById("firstnumber").value);
    let secondNumber = parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("q2").innerHTML = `The sum of two numbers are : ${addNumbers(firstNumber,secondNumber)}`  
})

// Q3) Arrays - Access Second Item Problem: Create an array named fruits containing "apple", "banana", and "mango". Print the second item from the array.
let fruits = ["apple", "banana","mango"];
document.getElementById("q3").innerHTML = `Second item of array is ${fruits[1]}`

// Q4) Loops - Print 1 to 5 Problem: Use a for loop to print numbers from 1 to 5.
function numberLoop(){
    let result = ""
    for(var i = 1; i <= 5; i++){
        result = result + `Number ${i}<br/>`
    }  
    return result  
}
document.getElementById("q4").innerHTML =  numberLoop()

// Q5) Conditions - Check Positive or Negative Problem: Create a function isPositive(num) that prints "Positive" if the number is greater than 0, otherwise prints "Negative".
function isPositive(num){
    if(num >= 0){
        return "Positive"
    }
    else{
        return "Negative"
    }
}
document.getElementById("findPositive").addEventListener("click",function(){
    let firstNumber = parseFloat(document.getElementById("fnumber").value);
    document.getElementById("q5").innerHTML = `The number is : ${isPositive(firstNumber)}`  
})


// Q6 Reverse a String Problem: Write a function reverseString(str) that returns the reverse of the given string.
function reverseString(str){
    return str.split("").reverse().join("");
}
document.getElementById("reverseString").addEventListener("click",function(){
    let string = document.getElementById("string").value;
    document.getElementById("q6").innerHTML = `The Reverse String is : ${reverseString(string)}`  
})
