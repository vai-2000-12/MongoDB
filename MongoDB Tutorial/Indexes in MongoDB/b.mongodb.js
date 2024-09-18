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