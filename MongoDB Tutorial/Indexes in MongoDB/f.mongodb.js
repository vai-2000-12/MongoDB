//How MongoDB rejects A Plan : Winning Plan and Rejected Plan
db.customers.getIndexes();

db.customers.find().pretty();

//Lets Create the Compound Index
db.customers.createIndex({age : 1 , name : 1});

//Order doesen't Matter in Compound Indexes..
db.customers.explain().find({name :"Daniel Brown", age :40});

db.customers.explain("allPlansExecution").find();

// We have studied The few Types of Indexes i.e Single Field Indexes 2. Compound Indexes 3.Partial Indexes 
//Lets Learn About other type of Indexes i.e Multi-Key Indexes:-
//MultiKey Indexes : Are the Indexes  that collect and Sort the Data  from fields  containing Array Values. Its Basically Improves the performance  for queries on an Array Fields
// Basically this Index Is created Over the Arrays ..Doesn't Matter that Array Is scalar Values

db.customers.insertOne({name :"Rohan", hobbies :[ "Cooking", "Sports"], addresses :[{street : "Main Street"}, {street : "second Street"}]});

//This Time I am Indexing an Array That is Possible in the MongoDB:
db.customers.createIndex({hobbies :1});
db.customers.find({hobbies : "Sports"}).pretty();

db.customers.explain("executionStats").find({hobbies: "Sports"});