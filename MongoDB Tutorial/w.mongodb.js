//Updating fields with UpdateOne() and UpdateMany() and $set

use('user');
db.users.find().pretty()
db.users.find().pretty().count();


/* This line of code is using the `updateOne()` method to update a specific document in the `users`
collection in the MongoDB database. */
// Updating the Last Record of the Rick:-
db.users.updateOne({_id: ObjectId('66e3d08e3c568fa31d5b1ae5')}, {$set: {hobbies:[{title : "Studying MongoDb", freq : 2}, {title : "OnlineGaming", freq :7}]}});
db.users.find().pretty();