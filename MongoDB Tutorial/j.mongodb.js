//Diving deep into create Operations:-
// so basically we have 3 methods to insert the Data  : insert() -- not recommended you can use
// insertOne() and insertMany()...

//Understanding the insert() method below:
use ('test');
db.dropDatabase(); // to drop the database

// insertOne() Method :
use ('contactData');
db.persons.insertOne({name : "max", age : 30 , hobbies : ["sports", "cokking"]});
db.persons.insertOne({name : "Manual", age : 24 , hobbies : [ "Playing Games"]});
db.persons.find().pretty();

//lets use insert Many Command :
db.persons.insertMany([ {name : "john" , age : 21} , {name : "Dravid" , age : 23}]);

//insert Method --Really Not Recommended:
// This Method is Now Depricated... Not in Use 
// Its Output have the Id 
db.persons.insert({name : "vaibhav", age : 24});