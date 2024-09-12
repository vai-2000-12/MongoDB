//Write Concern : Lets Understand 
use('persons');
db.persons.find().pretty();

 /* `W:1` in MongoDB specifies a write concern level where the server should acknowledge the write
operation. When `W:1` is used, it means that the server must acknowledge the write operation,
ensuring that the data has been successfully written to at least the primary node in a replica
set. This provides a level of assurance that the data has been persisted. */

db.persons.insertOne({name : "Alex" , age : 23}, {writeConcern: {w:1}})
db.persons.insertOne({name : "vaibhav" , age : 23}, {writeConcern: {w:0}})

// Understanding the j value default its value is Undefined or false ot it can be set as true
//lets take the example :
/* The `j : true` option in MongoDB specifies that the write operation should wait for the data to be
written to the journal before acknowledging the write. This ensures that the write operation is
durable and will not be lost in the event of a server crash or failure. By setting `j : true`, you
are ensuring that the data is safely stored in the journal before the write operation is considered
successful. */

db.persons.insertOne({name :  "Michela" , age :34}, {w :1 , j : true });
db.persons.find().pretty();


 /* `wtimeout` is a 3 rd parameter that specifies a time limit for the write operation
to complete and be acknowledged by the server. If the write operation does not
complete within the specified time (in milliseconds), the operation will time
out and an error will be returned. This parameter is useful for setting a
maximum time for write operations to prevent them from taking too long and
potentially causing delays in the application. */
db.pesrons.insertOne({name : "Alex", age : 23}, {w :1 , j : true, wtimeout : 1 })
db.persons.find().pretty();

/* Atomicity in the `insertOne()` operation ensures that the operation is either fully completed or not
completed at all. This means that if an `insertOne()` operation is interrupted or fails for any
reason, the database will not be left in a partially updated state. The operation will be rolled
back, and the data will remain consistent. */

/* The statement `import in the MongoDB` is not a valid MongoDB command or syntax. MongoDB does not
have a built-in `import` command for importing data directly within the MongoDB shell. */

/* `query please with mongoimport` seems to be a request for assistance or guidance on how to use the
`mongoimport` tool in MongoDB. The `mongoimport` tool is a command-line utility that allows you to
import data in various formats (such as JSON, CSV, or TSV) into a MongoDB database. */
