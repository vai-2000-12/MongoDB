// Element operator are as follows : type and exists
use('user');
db.users.insertMany(
  [
    {
      name: "Alex", age: 34, phone: 768234728,
      hobbies: [
        { title: "cricket", freq: 3 },
        { title: "ReadingBooks", freq: 5 }
      ]
    },
    { name: "Manual", age: 54, phone: 523254363, hobbies: [{ title: "Badiminton", freq: 7 }, { title: "Carrom", freq: 1 }] }
  ]
)
db.users.find().pretty();


/* The `exists` operator in MongoDB is used to find documents where a specific field exists, regardless
of its value. In the given code snippet, `db.persons.find({age : { : true}})` is searching
for all documents in the `persons` collection where the `age` field exists. This query will return
all documents that have the `age` field defined, regardless of the actual value stored in that
field. */
//Lets take the case : find all persons whose age is 30'..

db.persons.find({ age: { $exists: true } });

/* The query `db.persons.find({age : { : true,  : 21}});` is finding all documents in the
`persons` collection where the `age` field exists and the value of the `age` field is greater than
21. This query will return documents where the `age` field is present and the value stored in that
field is greater than 21. */
db.persons.find({ age: { $exists: true, $gt: 21 } });

db.persons.insertOne(
  {
    name: "Haina", age: null, phone: 76847286,
    hobbies: [
      { title: "Playing_Cards", freq: 6 },
      { title: "ReadingBooks", freq: 2 }
    ]
  }
)

db.persons.find().pretty();
db.persons.findOne({ name: "Haina", age: null });

/* The query `db.persons.find({age : { : true ,  : null}});` is finding all documents in the
`persons` collection where the `age` field exists and the value of the `age` field is not equal to
`null`. This query will return documents where the `age` field is present and has a value that is
not `null`. */
db.persons.find({ age: { $exists: true, $ne: null } });

/* The `type` operator in MongoDB is used to find documents where a specific field has a certain data
type. In the given code snippet, `db.persons.find({age : { : "number"}})` is searching for all
documents in the `persons` collection where the `age` field exists and has a data type of "number".
This query will return documents where the `age` field is present and its value is of type number. */

db.persons.find({ age: { $type: "number" } }).pretty();
db.persons.find({ hobbies: { $type: "array" } }).pretty();

//I can define an array with the type operator :

/* The query `db.persons.find({name : { : ["string", "number"]}});` is searching for all documents
in the `persons` collection where the `name` field exists and its data type is either "string" or
"number". This query will return documents where the `name` field is present and its value is either
a string or a number. */

db.persons.find({ name: { $type: ["string", "number"] } });
