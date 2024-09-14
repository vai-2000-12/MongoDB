//MORE ON CURSORS:-
//skipping the element and  limiting the Cursor:-

/* The `cursor.limit()` method in MongoDB is used to limit the number of documents returned by a query.
It specifies the maximum number of documents that the cursor will return. By using `cursor.limit()`,
you can control the number of results returned by a query, which can be useful for pagination or
limiting the amount of data retrieved from the database. */


/* The `cursor.skip()` method in MongoDB is used to skip a specified number of documents in a query
result. It allows you to control the starting point of the returned documents, effectively skipping
over a certain number of documents before returning the results. This can be useful for implementing
pagination or skipping irrelevant data in the query results. */

// One thing has to be kept in mind that sort() function can only be used After the find() function..

use('info');
db.userInfo.insertOne({name : "Alex", age : 45});
db.userInfo.insertMany([
    {name : "Ashok", age : 45},{ name :" Manual", age : 12}, {name : "Jonas", age: 30},{name:"Vaibhav", age : 32}
]);
db.userInfo.find().pretty();

// using the sort() function with limit function  :-
db.userInfo.find().sort({age : -1}).limit(3).pretty();

//This Query Basically first sorts the Data in ascending order them limit the data and thens skips the first Data..
db.userInfo.find().sort({age : 1}).limit(2).skip(1).pretty();