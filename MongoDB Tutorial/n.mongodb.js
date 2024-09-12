//Difference BETWEEN findOne() and find
// findOne() does not give back the Cursor and also pretty() command also not works with it
// findOne() returns the first Matching record  and its only returns the Only 1 document

use ('persons');
db.persons.insertOne( {
    name : "Rick", 
    age : 53,
    rating : {average : 6.7}
})
db.persons.findOne().pretty;

//COMPARESION OPERATORS:
// 1. $lt   : less than operator which returns all the documents having age less than the field value
db.persons.find({age : {$lt : 24}});
// This will return the value less than Field Value but this will also return the document with equal to the  Field value 
db.persons.find({age : {$lte : 24}});
// This will return the value equal to 24 this make no difference with the 1 Query and 2 Query
db.persons.find({age : 24});
db.persons.find({age : {$eq : 24}});

// This will return all the  value whose value is not equal to the field value
db.persons.find({age : {$ne : 22}});

// it will return the all the records whose value is greater then 24
db.persons.find({age : {$gt : 22}}).pretty();
// it will return the all the records whose value is greater then 24 and also value equals to 24
db.persons.find({age : {$gte : 24}}).pretty();

// Accessing the Nested Document with these Comparisons Operators:
db.persons.find({"rating.average" : {$eq : 6.7}});

/* `$in` is a query operator in MongoDB that is used to select documents where the value of a field
matches any value in the specified array. In the given example, `db.persons.find({age : { : [22,
24]}});` will return all documents where the age field has a value of either 22 or 24. */
db.persons.find({age : {$in : [22, 24]}});

/* `$nin` is a query operator in MongoDB that stands for "not in". It is used to select documents where
the value of a field is not in the specified array or does not match any value in the array. */
db.persons.find({age : {$nin : [22, 24]}});



