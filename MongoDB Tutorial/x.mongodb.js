// Understanding the $min , $max and $mul operator with Update Query
use('user');
db.users.find().pretty();
/* The `$min` operator in MongoDB is used in update queries to update a field's value only if the
specified value is less than the current value of the field. If the current value is greater than
the specified value, the field remains unchanged. This operator is useful for updating fields with
minimum values. */
 
db.users.updateOne({name : "Alex"}, {$min : {age : 34}});
db.users.find().pretty();

/* The `$max` operator in MongoDB is used in update queries to update a field's value only if the
specified value is greater than the current value of the field. If the current value is less than
the specified value, the field remains unchanged. This operator is useful for updating fields with
maximum values. */

db.users.updateOne({name : "Alex"}, {$max : {age : 32}});
db.users.find().pretty();

/* The `$mul` operator in MongoDB is used in update queries to multiply the current value of a field by
a specified value. This operator is useful for updating fields by performing multiplication
operations on their values. */

db.users.updateOne({name : "Alex"}, {$mul : {age : 1.1}});
db.users.find().pretty()
