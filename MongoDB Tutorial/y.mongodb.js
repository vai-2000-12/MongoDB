// Getting Rid of Feilds:-
use('user');
db.users.find().pretty();

//This is not the Awesome solution  if i want to get rid of Field in MongoDB..
db.users.updateMany({isSporty : true}, {$set : {phone : null}});
db.users.find().pretty();

/* `$unset` is a MongoDB update operator that is used to remove a specific field from a document. When
you use `$unset` in an update operation, it will delete the specified field from the document. This
can be useful when you want to get rid of a field in MongoDB without setting it to a specific value
like `null`. */

// The field will be deleted using unset operator and its awesome option rather than setting the feild as NULL..
db.users.updateOne({isSporty : true}, {$unset : {phone : " "}});
db.users.updateOne({isSporty : true}, {$unset : {age : " "}});
db.users.find().pretty();

/* `$rename ` is a MongoDB update operator that is used to rename a field in a document. When you use
`$rename ` in an update operation, you specify the current field name and the new field name to
rename the field. This operator allows you to change the name of a field without altering its value
or type, providing a way to update the structure of your documents without losing any data. */


db.users.updateMany({name : "Bunty"}, {$rename : {age : "Total Age"}});
db.users.find().pretty();


/* `upsert` is a comment in the code snippet and not an actual JavaScript or MongoDB command. In
MongoDB, an upsert operation is a combination of "update" and "insert". When you perform an upsert
operation, MongoDB will update an existing document if it matches the specified criteria, or insert
a new document if no matching document is found. This helps to avoid duplicate entries and ensures
that the data is either updated or inserted based on the conditions provided. */

//So since this Name Data was not their none of the Data Set is updated , Is their any to that if the data is not their so first it should insert and then update that Record 
db.users.updateOne({name : "Julia"}, {$set : {age : 29, hobbies :[{title : "Hello Duniyawala", freq : 5 }], isSporty : true}}, {upsert : true});
db.users.find().pretty();


