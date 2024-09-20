//About Covered Queries:-
/*
In MongoDB, the concept of "Covered Queries" refers to a query that can be fully satisfied using an index,
 without needing to read from the actual documents in the collection. This can significantly improve performance 
 because MongoDB can retrieve results directly from the index, avoiding a more expensive lookup in the underlying data.
*/
//Lets Add the New Docs:-
use('orderDetails');
db.customers.insertMany([
    {name :"Max", age : 24, salary : 40000},
    {name : "Manu", age :40, salary : 60000}
])

db.customers.createIndex({name : 1});
// So the Main point here is that when this totalDocsExamined will be 0;
db.customers.explain("executionStats").find({name : "Max"}); //"totalDocsExamined": 1,
 // here I used the Projection in this case this totalDocsExamined is 0 
 //This is Covered Queries...Here the Stage is PROJECTION
db.customers.explain("executionStats").find({name : "Max"}, {_id : 0, name : 1}) //  "totalDocsExamined": 0, 

db.customers.find().pretty();