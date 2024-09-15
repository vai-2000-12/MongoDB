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