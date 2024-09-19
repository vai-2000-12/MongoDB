//Understanding the Partial Index :
//Partial indexes is used with Conjection with Unique Index:-

use('RandomData');
db.user.insertMany([{name : "Max", email : "Max12@gmail.com"}, {name :"George"}])

 //E11000 duplicate key error collection: test.user index: email_1 dup key: { email: null }
db.user.insertOne({name : "Anna"}) 
//Creating the Indexes :
//Creating the Indexes As Unique..
db.user.createIndex({email : 1});
db.user.createIndex({email : 1}, {unique : true});
db.user.dropIndex({email :1});

db.user.createIndex({email :1}, {unique : true , partialFilterExpression : {email : {$exists : true}}});
db.user.insertOne({name : "Anna"}) 
db.user.find().pretty();
db.user.getIndexes();

//TTL Index:- Time To Live Indexes
db.sessions.insertOne({data : "Dfasrae", createdAt : new Date()})
db.sessions.find().pretty();
// This expiredAfterSession is used only with the Date Objects
db.sessions.createIndex({createdAt : 1}, {expireAfterSeconds : 10});
//Basically the Data Is being Deleted After 10 Seconds when I added this new Argument in the CreateIndex 
//This is Basically useful n cases Where you want to expire A session after sometime  this expireAfterSeconds is useful
db.sessions.find().pretty();

//Query Planning and Query Diagonsis:-
// The explain() method takes 3 arguments : queryPlanner , executionStats, allPlansExceution
db.sessions.explain("allPlansExecution").find().pretty();
db.sessions.explain("executionStats").find().pretty();
db.sessions.explain("queryPlanner").find().pretty();

