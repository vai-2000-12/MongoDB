//Updating Matched Arrays Elements:-
use ('user');
db.users.find().pretty();


db.users.find({
    hobbies: {
      $elemMatch: {
        title: "Carrom",
        freq: { $gte: 1 }
      }
    }
  })
  

//Array update Operators in MongoDb : $pull, $pullAll, $push , $addToSet , $ , $[], $[<identifier>]
/* This MongoDB query is updating multiple documents in the "users" collection where the "hobbies"
array contains an element with the title "Badminton" and a frequency greater than or equal to 3. */

//$ in mongoDb

db.users.updateMany({hobbies : {$elemMatch : {title : "Badiminton", freq : {$gte :3 }}}}, {$set : {"hobbies.$.highFreq" : true}});

db.users.find().pretty();

//updating all Array Elements:

db.users.find({"hobbies.freq" : {$gt :2}}).pretty()

/* The `$[]` operator in MongoDB is used to update all elements in an array that match the given
criteria without specifying a particular index. When used in an update operation, it identifies all
elements in the array that meet the specified conditions and applies the update operation to each of
them. This is particularly useful when you want to update multiple elements within an array in a
single operation without knowing their specific positions. */

db.users.updateMany({TotalAge : {gt : 30}}, {$inc :{"hobbies.$[].freq" : -1}});

