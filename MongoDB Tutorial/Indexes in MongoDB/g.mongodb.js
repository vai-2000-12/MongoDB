//Understanding the TEXT INDEX
use('Store');
db.products.insertMany([
    {name : "A Book", description : "This is an Amazing book"},
    {name : "A Computer", description : "This is an Machine And Its really Superfast"}
]);
//If I set This to Ascending then It will not Work : db.products.createIndex({description : 1}) or -1 NOT OK
db.products.createIndex({description : -1});
db.products.explain("executionStats").find({description : "This is an Amazing book"});

db.products.dropIndex({description : -1})

//To create the Text Index : Text Indexes Are Pretty Expensive
db.products.createIndex({description : "text"});
db.products.find({$text : {$search : "book" }}).pretty();
db.products.find({$text : {$search : "Machine book" }}).pretty();
db.products.find({$text : {$search : "\"  book\" " }}).pretty();
