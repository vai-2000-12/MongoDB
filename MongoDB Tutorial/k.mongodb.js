//Working with Ordered Inserts :-
//We can Give some Additional Information with the insert Commands
db.hobbies.insertMany([{_id : "SPORTS" , name : "SPORTS"}, {_id : "Cooking", name : "COOKING"}, {_id: "yoga", name :"Yoga", }]);
// This insertion is called the Ordered Insert.. I.E the moment I tried to insert the Rest It failed because of duplicated Keys and this is the default behaviour of the MongoDB ..
//  orderedInsert means that the data is stand Alone but if the process fails it can does the insert Operation but it does Not Rollback..


// I can pass the one more argument that is document but this will not be inserted but instead it configures the operation ..
//Keep in mind that this ordered propertty will never rollback the entire operation if something fails...

/* `ordered: false` is a configuration option that can be passed when performing an insert operation in
MongoDB. When set to `false`, it indicates that the insert operation should continue even if there
are errors, such as duplicate key errors. This means that if any individual document insertion
fails, it will skip that document and continue with the rest of the insert operation without rolling
back the entire operation. */

db.hobbies.insertMany([{_id : "SPORTS" , name : "SPORTS"}, {_id : "Cooking", name : "COOKING"}, {_id: "yoga", name :"Yoga", }], {ordered: false});
db.hobbies.find().pretty();
