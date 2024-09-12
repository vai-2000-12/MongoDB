// Logical Operator : 1.$and , 2.$not , 3.$nor , 4.$or
use ('persons');

/* The `count` command in MongoDB is used to count the number of documents that match a specific query
criteria. In the provided code snippet, `db.persons.find({age : { : 20}}).count()` is counting
the number of documents in the "persons" collection where the "age" field is greater than 20. */

db.persons.find({age : {$gt : 20}}).count()
db.persons.find({age : {$lt : 23}}).count()

/* The `$nor` operator in MongoDB is used to perform a logical NOR operation on an array of one or more
query expression clauses. It selects the documents that fail all the specified conditions. In other
words, it is the opposite of the `$or` operator. */

db.persons.find({
    $nor: [
      { age: { $lte: 23 } },
      { age: { $gte: 26 } }
    ]
});

/* The `$or` operator in MongoDB is used to perform a logical OR operation on an array of two or more
query expression clauses. It selects the documents that satisfy at least one of the specified
conditions. */
db.persons.find({
    $or: [
      { age: { $lte: 23 } },
      { age: { $gte: 26 } }
    ]
}).count();


/* The `and` operator is not explicitly used in the provided code snippet. In MongoDB, the logical
operator `` is used to combine multiple expressions so that all the expressions must be true for
a document to be included in the result set. It is often implicitly applied when you provide
 And is the Default mechanism of the Mongo Db..then why $and the reason 
behind is that we can have multiple  fields then i need this operator multiple key-value pairs in a query object. */

db.persons.find({
    $and: [
      { age: { $gte: 21 } },
      { age: { $lte: 24 } }
    ]
}).count();

/* The `not` in the provided code snippet is not a valid MongoDB operator. It seems to be a comment or
placeholder text. If you have a specific question or need assistance with a different aspect of the
code, feel free to ask! */
//I cannot write the $not in the first place as we have seen others operators
db.persons.find(
    {age : 
        {
     $not : {$eq :24}
    }
}).count();


