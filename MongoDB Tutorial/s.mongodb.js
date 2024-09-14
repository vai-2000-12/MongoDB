// CURSORS IN MONGODB
/* In MongoDB, a cursor is a pointer to the result set of a query. When you run a query in MongoDB, it
returns a cursor which allows you to iterate over the results. Cursors are used to retrieve
documents from the database in a more efficient manner, especially when dealing with large result
sets. Cursors provide methods for navigating through the result set, fetching documents, and
handling the data returned by the query. */

// By default the mongodb driver takes 20 cursors its the default 
use('user');
/* The `next()` method in MongoDB is used to retrieve the next document from the cursor result set.
When you run a query in MongoDB, it returns a cursor that allows you to iterate over the results. By
calling the `next()` method on the cursor, you can fetch the next document in the result set. This
is useful for navigating through the query results and processing them one document at a time. */

db.users.find().next()

const dataCursor = db.users.find();
dataCursor.next()

// cursor have its own method 
dataCursor.forEach(doc => {
  printjson(doc)    
});

/* `//hasNext() in a mongodb` is a comment in the code snippet and it seems to be a placeholder or a
reminder for a potential operation related to checking if there are more documents available in the
cursor result set in MongoDB. */

//Sorting The Cursor Results using the sort() method :-
/* `//cursor.sort()` is a comment in the code snippet that suggests using the `sort()` method on a
cursor object in MongoDB. The `sort()` method is used to sort the documents in the cursor result set
based on a specified field or fields. By providing a sort criteria to the `sort()` method, you can
control the order in which the documents are returned by the cursor. This allows you to retrieve the
documents in a specific order, such as ascending or descending based on a particular field value. */

// 1 means sort in ascending 
// -1 means sort in  descending
// Query is Below using the sort() function..:-
// db.movies.find().sort({"rating.average":1}).pretty();
// db.movies.find().sort({"rating.average" :1 , runtime :-1}).pretty();
