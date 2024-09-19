// The First Way is To pass the Second argument and by writing its unique and making this as unique
//Understanding the Other way of configuring the Indexes is setting up The Partial Filters
//Indexes eats the Size of the Disk
db.customers.getIndexes();
//Lets Create the New Index:
//This partialFilterExpression can be used In the Compound Indexes as well as an Second Argument

// This MongoDB command creates an index on the previous_cities field of the customers collection. The index 
//is partial, meaning it only applies to documents where the previous_cities field contains the value "San Diago". This helps optimize queries targeting customers who lived in "San Diago" without indexing every document in the collection.

db.customers.createIndex({"previous_cities" :1}, {partialFilterExpression: {"previous_cities" : "San Diago"}}); //COLLSCAN was perforned in this Query
db.customers.explain().find({"previous_cities" : "San Diago"});