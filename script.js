"user strict";

let select;
let output;
let input;

window.addEventListener("load", settingUp);

function settingUp(){
    console.log("settingup");
    document.querySelector("button").addEventListener("click", generate);
}

function generate() {
    console.log("generate");

    input = document.querySelector("#input").value;
    select = document.querySelector("#select").value;

    if (select === "1"){
        output = input[0].toUpperCase()+input.slice(1);
    } else {
        output = "I made it this far LOVE ME";
    };

    showOutput();
}

function showOutput() {
    console.log("showOutput");
    document.querySelector("#output").innerHTML = output;
}