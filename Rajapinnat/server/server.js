const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const bookArray = [];
bookArray[0] = {id_book:1, name:"Everything You Ever Wanted to Know", author:"Upton", isbn:"082305649x"};
bookArray[1] = {id_book:2, name:"Photography", author:"Vilppu", isbn:"205711499"};
bookArray[2] = {id_book:3, name:"Drawing Manual Vilppu", author:"Zelanshi", isbn:"1892053039"};
bookArray[3] = {id_book:4, name:"TBA", author:"Zelanshi", isbn:"0534613932"};
bookArray[4] = {id_book:5, name:"Shaping Space", author:"Speight", isbn:"0534613934"};
bookArray[5] = {id_book:6, name:"Art Since 1940", author:"Speight", isbn:"0131839780"};
bookArray[6] = {id_book:7, name:"Make it in Clay", author:"Stokstad", isbn:"0076417011"};
bookArray[7] = {id_book:8, name:"Art History Vol II & ala carte lab", author:"Stokstad", isbn:"205795617"};
bookArray[8] = {id_book:9, name:"Accounting Concepts", author:"Albercht", isbn:"1111287856"};
bookArray[9] = {id_book:10, name:"Intermediate Accounting", author:"Stice", isbn:"0538479736"};
bookArray[10] = {id_book:11, name:"Management Info Systems", author:"Marakas", isbn:"9780073376813"};
bookArray[11] = {id_book:12, name:"Management", author:"Williams", isbn:"9780757524028"};
bookArray[12] = {id_book:13, name:"Leadership Wisdom of Jesus", author:"Manz", isbn:"9781609940041"};
bookArray[13] = {id_book:14, name:"Business Law Today", author:"Miller", isbn:"9780324786156"};
bookArray[14] = {id_book:15, name:"Management Info Systems", author:"Marakas", isbn:"9780073376813"};

for (let i = 0; i < bookArray.length; i++) {
    console.log(bookArray[i].name);
}

const server = http.createServer(
    function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello World!\n");
   }
);

server.listen(port, hostname, 
    function() {
        console.log(`Server running at http://${hostname}:${port}/`);
    }
);