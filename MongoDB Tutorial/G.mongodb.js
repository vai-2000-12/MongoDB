use ('persons');
db.persons.insertOne({name : "max", age : 29});

// If I want the to have one to one relationship then I can use the Embedded Documents:
db.persons.findOne({name : "max"});

// Embedded Documents :

db.persons.insertOne({name : "me", title : " hero", coursesOpted : {coursesName : ["PCM", "CS optional"]}});
db.persons.find().pretty();

// To get the particular Data From the this Documents :
// This Find Method does not return the records but it returns the Cursors...
db.persons.find({"coursesOpted.coursesName" : "PCM"});

db.persons.find().toArray();

// Many To Many Relationship:
use ('shop');
db.products.insertOne({prodName : "dishWash", price: 200,});
db.customers.insertOne({name : "max", age : 23});

db.products.find();

db.orders.insertOne({prodId :  ObjectId('66e025d67bf713748ccde39a'), custId : ObjectId('66e025f233db94d33921a299')});
db.orders.find().pretty();

// Drop collection:
db.ordes.drop(); // This returns the Boolean Value..

db.customers.updateOne({}, {$set : {orders : [ {prodId : ObjectId('66e025d67bf713748ccde39a') , quantity : 2 } ]}});
db.customers.find().pretty();