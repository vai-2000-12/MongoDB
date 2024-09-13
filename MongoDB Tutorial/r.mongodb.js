//Querying Arrays:
show ('dbs');
use('user');
db.users.find();

db.users.find({hobbies : {title : "cricket", freq : 3}});

//This super useful for querying data that has to be kept in mind
db.users.find({"hobbies.title" : "cricket"}).pretty()

// Operators used for Arrays Query Selectors  are : $size , $eleMatch, $all..

/* `$size` is an operator in MongoDB used to query arrays based on their length. It allows you to find
documents where the array field contains a specific number of elements. For example, if you want to
find documents where the "hobbies" array has exactly 3 elements, you can use the `` operator
like this: */

//lets  Insert the One Document:-
db.users.insertOne({name : "Rick", hobbies : ["Playing", "Reading", "Cooking"]});

//One Thing that has to be Kept in the mind is that we have to provide the exact Numbers
db.users.find({hobbies: {$size : 3}}).pretty();

/* The `$all
` operator in MongoDB is used to select the documents where the value of a field is an
array that contains all the specified elements. It is similar to a logical AND operation for arrays.
When using `$all`, MongoDB will match documents where the array field contains all the specified
elements in any order. */
//Here order does not matter you just wanted to get the Data From the Array:
db.users.find({hobbies : {$all : ["cricket", "carrom"]}}).pretty();
