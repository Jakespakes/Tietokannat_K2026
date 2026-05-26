const readline = require("readline");

const book = {
    bookArray: [
        {id_book:1, name:"Everything You Ever Wanted to Know", author:"Upton", isbn:"082305649x"},
        {id_book:2, name:"Photography", author:"Vilppu", isbn:"205711499"},
        {id_book:3, name:"Drawing Manual Vilppu", author:"Zelanshi", isbn:"1892053039"}
    ],

    getBook(id) {
        return this.bookArray.find(book => book.id_book === id);
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna kirjan ID: ", (input) => {
    const id = Number(input);

    const result = book.getBook(id);

    if (result) {
        console.log("Kirja löytyi:");
        console.log(result);
    } else {
        console.log("Kirjaa ei löytynyt.");
    }

    rl.close();
});