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

//Updating &Finding the Array Fields...

//Find all hobbies greater than 2 
db.users.find({"hobbies.freq" : {$gt : 2}}).pretty();

//This query updates all users in the users collection who have hobbies with a frequency (freq) greater than
// 2. For each matching hobby, 
//it adds a new field goodFreq with the value true to that specific hobby.
db.users.updateMany({"hobbies.freq" : {$gt : 2}},  {$set : {"hobbies.$[el].goodFreq":true}}, {arrayFilters : [{"el.freq" :{$gt: 2}}]});


//Adding all the elements to Arrays:
//*$push basically pushes the elements to old availble records
db.users.updateOne(
  { name: "Alex" }, // Filter: find the document where name is "Alex"
  { $push: { hobbies: { title: "Sports", freq: 4 } } } // Update: push a new hobby object into the hobbies array
);
db.users.find().pretty();

//$each we can add more elements using this Operator :-=
db.users.updateOne(
  { name: "Bunty" }, // Filter: find the document where name is "Alex"
  { $push: { hobbies: {$each : [{title : "Mastercheif", freq : 8},{title : "Hello", freq :3}]}}} // Update: push a new hobby object into the hobbies array
);

// we can sort them before pushing this element into insertion:
// Update: push a new hobby object into the hobbies array
db.users.updateOne(
  { name: "Bunty" }, // Filter: find the document where name is "Alex"
  { $push: { hobbies: {$each : [{title : "Mastercheif", freq : 8},{title : "Hello", freq :3}] , $sort : {freq : 1}, $slice : 1}}} 
);
db.users.find().pretty();

//$pull
db.users.updateOne(
  { name: "Manual" }, // Filter: find the document where name is "Alex"
  { $pull: { hobbies: { title: "Badiminton", freq: 7 } } } // Update: push a new hobby object into the hobbies array
);
db.users.find().pretty();

//$pop to remove the Last Elemnt from the Array
db.users.updateOne(
  { name: "Haina" }, // Filter: find the document where name is "Alex"
  { $pop : { hobbies: 1} } // Update: push a new hobby object into the hobbies array
);


//$addToSet : basic difference is that its do not allow duplicate Records .. Only unique Values 
db.users.updateOne({name : "Bunty"}, {$addToSet :{hobbies : {title :"Engineer", freq :4}}})
db.users.find().pretty();