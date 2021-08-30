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
    } else if (select === "2"){
        output = input.substring(input.indexOf(" "), input.substring(input.lastIndexOf(" ")));
    } else if (select === "3"){
        output = input.indexOf(" ");
    } else if (select === "4"){
        output = input.substring(input.indexOf(" ") +1, input.lastIndexOf(" "));
    } else if (select === "5"){
        output = input.endsWith(".jpg");
    } else if (select === "6"){
        output = input.indexOf(" "), input.replaceAll(input, `*`);
    } else {
        output = "I made it this far LOVE ME";
    };

    showOutput();
}

function showOutput() {
    console.log("showOutput");
    document.querySelector("#output").innerHTML = output;
}