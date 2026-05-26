const book = {
    bookArray:[
    {id_book:1, name:"Everything You Ever Wanted to Know", author:"Upton", isbn:"082305649x"},
    {id_book:2, name:"Photography", author:"Vilppu", isbn:"205711499"},
    {id_book:3, name:"Drawing Manual Vilppu", author:"Zelanshi", isbn:"1892053039"},
    {id_book:4, name:"The Art of Animation", author:"Williams", isbn:"0571202284"},
    {id_book:5, name:"Digital Painting Techniques", author:"Various Authors", isbn:"190941414X"},
    {id_book:6, name:"The Animator's Survival Kit", author:"Williams", isbn:"0571202284"},
    {id_book:7, name:"Figure Drawing for All It's Worth", author:"Loomis", isbn:"0857680986"},
    {id_book:8, name:"Color and Light", author:"Gurney", isbn:"0740797719"},
    {id_book:9, name:"Perspective Made Easy", author:"Norling", isbn:"0486404730"},
    {id_book:10, name:"Anatomy for Sculptors", author:"Uldis Zarins", isbn:"0989426100"},
    {id_book:11, name:"Imaginative Realism", author:"Gurney", isbn:"0740785508"},
    {id_book:12, name:"The Skillful Huntsman", author:"Design Studio Press", isbn:"0972667644"},
    {id_book:13, name:"Framed Ink", author:"Mateu-Mestre", isbn:"1933492953"},
    {id_book:14, name:"How to Draw", author:"Robertson", isbn:"1933492732"},
    {id_book:15, name:"The Art of Comic Book Inking", author:"Buscema", isbn:"0823010279"},
],
    getAllBooks: function() {
        console.log(this.bookArray);
    },

    getOneBook:function(id){
        console.log(this.bookArray[id]);
    },

    pushBook: function(newBook) {
        this.bookArray.push(newBook);
    }
};

book.getAllBooks();

var args=process.argv;

if(args.length > 2){
    var id = parseInt(args[2]);
    book.getOneBook(id);
} else{
    book.getAllBooks();
}

book.pushBook({id_book: 16, name: "test", author: "test", isbn: "test"});