//Understanding the Index Restrictions:-
use('OrderDetails');
db.customers.find().pretty();
db.customers.explain("executionStats").find({age : {$gt : 60}}).pretty();

//Dropping the Index: The Method is dropIndex();
//The same Aargument has ti be Passed as per while Creating the Index
db.customers.dropIndex({"address.city" : 1});
db.customers.getIndexes();
db.customers.explain("executionStats").find({age : {$gt : 60}}).pretty();

// Bsically What Happened why "executionTimeMillis" becomes Low without Index
// because we saved the Time of going to that Data using Pointer

//creating the Coumpound Indexes:
db.customers.findOne({name : "Emily Carter"});
db.customers.createIndex({city : 1});
db.customers.explain("executionStats").find({city : "San Diego"});

//Types Of Indexes :
 // 1. Single Field Indexes  2 Compound Indexes  3. Multikey Index  4. Geospatial Indexes  
 // 5.Text Indexes 6.Hashed Indexes 7. Clustered Indexes

//Compound Index :Compound indexes collect and sort data from two or more fields in each document in a collection. Data is grouped by the
// first field in the index and then by each subsequent field.
db.customers.dropIndex({city : 1})

//I can to create the Compound Index : Coumpound Indexes Are used to speed up the Queries..
//This Index scans from left to right Pattern it can;t look to 3 argument directly
db.customers.createIndex({"previous_cities" :-1, age :1});
db.customers.explain().find({"previous_cities" : "Phoenix", age : 28}).pretty();  //  "indexName": "previous_cities_-1_age_1",
db.customers.explain().find({"previous_cities" : "Phoenix"}).pretty();  //  "indexName": "previous_cities_-1_age_1",
db.customers.find().pretty(); 

//Indexes Are just Not used to retrieve the Data Faster But also Helps in Sorting the Data Efficiently
db.customers.explain().find({"previous_cities" : "San Diago"}).sort({age : 1});


//I can get the Indexes Using getIndexes() Method:
// Their is a By Default Index Generated By the MongoDB:
 
db.customers.getIndexes();   //  "_id": 1 Default Index for new Collection Always Maintained by MongoDB  

//Creating Unique Indexes..:-
db.customers.find().pretty();

//Unique Indexes helps in Data Consistency and helps us to avoid the Duplicate for Fields   
db.customers.createIndex({"contact.email": 1}, {unique : true}); //error Duplicate Key for this Email
db.customers.dropIndex({"previous_cities" :-1, age :1})