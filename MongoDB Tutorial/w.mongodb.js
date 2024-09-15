//Updating fields with UpdateOne() and UpdateMany() and $set

use('user');
db.users.find().pretty()
db.users.find().pretty().count();


/* This line of code is using the `updateOne()` method to update a specific document in the `users`
collection in the MongoDB database. */
// Updating the Last Record of the Rick:-
 /* The `$set` operator in MongoDB is used to update specific fields in a document without affecting
 other fields. In the context of the code snippet provided, the `$set` operator is being used to
 update the `hobbies` field of a specific document in the `users` collection. It sets the value of
 the `hobbies` field to an array containing two objects with `title` and `freq` properties. */
 
db.users.updateOne({_id: ObjectId('66e3d08e3c568fa31d5b1ae5')}, {$set: {hobbies:[{title : "Studying MongoDb", freq : 2}, {title : "OnlineGaming", freq :7}]}});
db.users.find().pretty();

//I can use the $set with updateMany() function as well..

db.users.updateMany({"hobbies.title": "Studying MongoDb"}, {$set : {isSporty : true}});
db.users.find().pretty();

//Updating Multi[;e Fields using the $set operation:-
db.users.updateOne({_id:ObjectId('66e2d9aabc5a302ccad1a353')}, {$set : {phone : "79843543693", age :32, name : "Bunty"}});
db.users.find().pretty();

/* `$inc` is a MongoDB update operator that is used to increment the value of a field by a specified
amount. When used in an update operation, ``$inc` increases the value of the specified field by the
specified amount. If the field does not exist, ``$inc` sets the field to the specified amount. This
operator is useful for performing arithmetic operations on numerical fields in MongoDB documents. */


//I cannot apply the same operator on two different Fields that is not allowed in MongoDB
db.users.updateOne({name : "Rick"}, {$inc : {age :-1}});
db.users.find().pretty();