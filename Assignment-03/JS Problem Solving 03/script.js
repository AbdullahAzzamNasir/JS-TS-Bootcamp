// Q1) Count Letters in a Word
function wordCount() {
    let countString = document.getElementById("string").value;
    let printArea = document.getElementById("q1");
    let countBtn = document.getElementById("countWord");
    let counting = countString.length;
    printArea.innerHTML = `Total Letter Count is ${counting}`;
}

// Q2) If/Else Check if Number is Big
function bigNumber(){
    let fnumber = parseFloat(document.getElementById("fNumber").value);
    let snumber = parseFloat(document.getElementById("sNumber").value);
    let numberArea = document.getElementById("q2");

    if ( fnumber > snumber){
        numberArea.innerHTML = `This ${fnumber} is Bigger`
    }
    else if (fnumber == snumber){
        numberArea.innerHTML = `Both Number are same`
    }
    else {
        numberArea.innerHTML = `This ${snumber} is Bigger`
    }
}

// Q4) By using array Remove Last Item of array
let valorantAgent = ["Sage", "Razor", "Fade", "Cypher", "Reyna", "KillJoy"];
let beforeArray = document.getElementById("arrayBefore");
let popelement = document.getElementById("popelement");
let afterArray = document.getElementById("arrayAfter");
let lastElementPop;

beforeArray.innerHTML = `Array Before Pop Last Element [${valorantAgent}]`;

lastElementPop = valorantAgent.pop();

popelement.innerHTML = `Poped Last Element is ${lastElementPop}`;

afterArray.innerHTML = `Array After Pop Last Element [${valorantAgent}]`