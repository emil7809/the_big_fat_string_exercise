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
        output = input.replaceAll(input, `*`).repeat(input.length);
    } else if (select === "7"){
        output = input[0].toLowerCase()+input[1].toLocaleLowerCase()+input[2].toUpperCase()+input.slice(1);
    }  else if (select === "8"){

        let length = input.length;

        let i = 1;
        let temp = input[0];

        for (i = 1; i < length; i++) {

          if (input[i - 1] == " " || input[i - 1] == "-") {
            temp += input[i].toUpperCase();
          } else {
            temp += input[i].toLowerCase();
          }
        }
        output = temp;
    }  else {
        output = "I made it this far LOVE ME";
    };

    showOutput();
}

function showOutput() {
    console.log("showOutput");
    document.querySelector("#output").innerHTML = output;
}