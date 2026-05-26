const prompt = require('prompt-sync')();

const x = parseInt(prompt("Anna eka luku: "));
const y = parseInt(prompt("Annt oka luku: "));

if (x < y) {
    console.log(`${y} on isompi`);
} else if (x > y) {
    console.log(`${x} on isompi`);
} else 
    console.log("Luvut ovat yhtä suuret");