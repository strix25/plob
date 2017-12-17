// var booksJSON;

// var self = this;
// $.getJSON("books.json", function (data) {
//     booksJSON = data;
//     console.log(booksJSON);

// });

//console.log(booker.books[1]);
for (var key in booker.books) {
    $( "#test" ).append( `<p>${booker.books[key].name}</p>` );
}
