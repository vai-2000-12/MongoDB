//Retrieving Data Efficiently and in a Structured Way..
show ('collections');
use ('customers')
db.customers.find().pretty();

//Lets Use the Aggregate Framework
/*
$match:-
Filters documents based on a specified query predicate.
Matched documents are passed to the next pipeline stage.
*/
//This aggregate() also returns the Cursor just like the find() method
/*
 
Group Stage ($group): Groups the filtered
 documents by the name field and counts the number of documents (i.e., customers) for each name.

_id: { name: "$name" }: Groups the documents by the name field. The _id field in the output will be the unique name values.
persons: { $sum: 1 }: For each group (unique name), it counts the number of documents by summing 1 for each document in the group. 
This effectively gives the count of customers with the same name.
*/
db.customers.aggregate([
    {$match: {age : 41} }, 
    {$group: {
      _id: { name : "$name"},
      persons: {
        $sum: 1
      }
    }},
    {$sort: {
      persons : 1
    }}
]);

//Using $sort with the Aggregate() function
db.customers.aggregate([
    {$match: {age : {$gt : 41}} }, 
    {$group: {
      _id: { name : "$name"},
      persons: {
        $sum: 1
      }
    }},
    {$sort: {
      persons : -1
    }}
]).pretty();
db.customers.find().pretty();