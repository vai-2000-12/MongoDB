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
// Basically this Index Is created Over the Arrays of Values ..Doesn't Matter that Array Is scalar Values
//Multi Key Index Are Bigger than Single Field Indexes it should be used Wisely 
db.customers.insertOne({name :"Rohan", hobbies :[ "Cooking", "Sports"], addresses :[{street : "Main Street"}, {street : "second Street"}]});

//This Time I am Indexing an Array That is Possible in the MongoDB:
db.customers.createIndex({hobbies :1});
db.customers.find({hobbies : "Sports"}).pretty();

db.customers.explain("executionStats").find({hobbies: "Sports"});

db.customers.createIndex({addresses : 1});
//This is Because the addresses Field Holds the whole List Of Documents that is why It did the COLLSCAN rather than IXSCAN

db.customers.explain("executionStats").find({"addresses.street" : "Main Street"}); // this Uses COLLSCAN not IXSCAN

// Instead if I do Something Like This: Here MongoDB did the Index Scan because we particularly Mentioned The Document..
db.customers.explain("executionStats").find({addresses: {street : "Main Street"}});

// We can also Create the Index like This : This is Also the MultiKey Index:
db.customers.createIndex({"addresses.street" : 1});
db.customers.explain("executionStats").find({"addresses.street" : "MaijnStreet"}).pretty(); //Example For the MultiKey Indexes and it did the Index Scan Rather than COLLSCAN

// Restrictions While Using the MutiKey Indexes:- We can create MultiKey Indexes With Compound Indexes nut We cannot do This :
//cannot index parallel arrays [hobbies] [addresses]        
db.customers.createIndex({addresses : 1, hobbies: 1}); //NOT OK

db.customers.find().pretty();