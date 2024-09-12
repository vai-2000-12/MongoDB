/* `Evaluation Operators in MongoDB` are used to perform various operations for evaluating expressions
and comparing values within MongoDB queries. These operators help in filtering and manipulating data
based on specific conditions, such as checking if a field exists, comparing values, or matching
patterns. They are essential for querying and updating documents in MongoDB collections efficiently. */

/* `$regex` is a MongoDB evaluation operator used for pattern matching within queries. It allows you
to search for documents where a specific field matches a regular expression pattern. This operator
is commonly used in MongoDB queries to perform text searches or find documents based on specific
patterns within string fields. */

use ('RandomText');
db.Text.insertOne({text : "Why all of a sudden am I receiving anonymous hello messages on my WhatsApp"});
db.Text.find({text : "all"}).pretty();

// regex stands for regular Expressions 
//the way i have used Regex is not the Super Efficient Nice for searching text 
db.Text.find({text : {$regex : /all/}}).pretty();

/* The `$expr` operator in MongoDB allows you to use aggregation expressions within query operations.
It enables you to compare fields from the same document or perform complex logical operations during
the query process. This operator is useful for scenarios where you need to evaluate expressions that
involve multiple fields or conditions that cannot be expressed using standard query operators alone.
By using `$expr`, you can leverage the power of aggregation expressions to filter and manipulate
data in a more flexible and efficient way. */
    
use('FinancialData');
db.sales.insertMany([
    {volume : 100, target :120}, 
    {volume : 89, target :80}, 
    {volume : 200, target :177}
]);
db.sales.find().pretty();

//to find documents where the volume amount exceeds the target:
/* This MongoDB query is using the `$expr` operator along with the `$gt` (greater than) operator to
find documents in the `sales` collection where the value of the `volume` field is greater than the
value of the `target` field. The expression `{ : ["", ""] }` compares the values of
the `volume` and `target` fields within the same document, returning documents where the `volume`
exceeds the `target`. */
db.sales.find({ $expr : {$gt: ["$volume", "$target"] } } ).pretty();

//more complex Query:
db.sales.find({
    $expr: {
      $gt: [
        {
          $cond: {
            if: { $gte: ["$volume", 190] },
            then: { $subtract: ["$volume", 10] },
            else: "$volume"
          }
        },
        "$target"
      ]
    }
  }).pretty();