const bill = document.querySelector("#valor");
const people = document.querySelector("#people");
const custom = document.querySelector("#custom");
const tipA = document.querySelector("#h3tipA");
const total = document.querySelector("#h3total");
const tips = document.querySelectorAll(".tip");
const reset = document.querySelector("#reset");

let billValue = 0.00;
let peopleValue = 1;
let customvalue = "";
let tipValue = 0.05;




bill.addEventListener("input", billFunction);
people.addEventListener("input", peopleFunction);
custom.addEventListener("input", customFunction);
reset.addEventListener("click", resetFunction);

tips.forEach((button) => {
    button.addEventListener("click", tipFunction);
})



function billFunction (){
    billValue =parseFloat(bill.value);
    calcular();
}

function peopleFunction (){
    const p = document.querySelector("p");
    if (people.value < 1){
        p.classList.add("msgError");
        people.classList.add("inputError");
    }else {
        p.classList.remove("msgError");
        people.classList.remove("inputError");
        peopleValue = parseFloat(people.value);
        calcular();
    }
}

function customFunction (){
    tipValue = parseFloat(custom.value)/100;
    calcular();
}

function tipFunction(element){
    let contOfElement = element.target.innerText;
    tipValue = parseFloat(contOfElement)/100;
    calcular();
}

function calcular () {
    let mudartipA = billValue * tipValue / peopleValue;
    let mudartotal = billValue * (1 + tipValue) / peopleValue;
    tipA.innerText = "$" + mudartipA.toFixed(2);
    total.innerText = "$" + parseFloat(mudartotal.toFixed(2));

}

function resetFunction (){
    tipA.innerText = "$0.00";
    total.innerText = "$0.00";
    bill.value = "";
    custom.value = "";
    people.value = "1";
    peopleFunction();
    billValue = 0.00;
    peopleValue = "";
    customvalue = "";
    tipValue = 0.05;
}

