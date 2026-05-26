const prompt = require('prompt-sync')();

const sana = prompt("Anna sana: ");
const anas = reverseString(sana);

function reverseString(str) {
    return str.split("").reverse().join("");
}

if (sana == anas)
    console.log("Sana on palindromi");
else 
    console.log("Sana ei ole palindromi");