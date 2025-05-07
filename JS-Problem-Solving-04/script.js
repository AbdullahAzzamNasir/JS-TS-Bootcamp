// Q11) Objects Create an object with name, age, and city properties.

let myInfo = {
    name: 'Abdullah',
    age: 25,
    city: 'Karachi'
}
console.log(myInfo.name);


function addNumber(){
    let fnumber = parseFloat(document.getElementById("fnumber").value);
    let snumber = parseFloat(document.getElementById("snumber").value);
    let resultArea = document.getElementById("numSum");
    let result;
    result = fnumber + snumber;
    resultArea.innerHTML = `Sum of two numbers are ${result}`;
}