//use vaibhav;
db.MyProject.insertOne({Title: "Learning the Mongo Database", Editor: "Vs Code"});
db.MyProject.find();

// Writing the Update Query Based  on The Aove Data

db.MyProject.updateOne(
    { _id: ObjectId("66d4a21560de01a4b737798f") },
    { $set: { Title: "Learning Vs Code" } }
);

    db.MyProject.find()
    // Simple update Method: Basically This Method has Been Depricated
// eprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany,
// or bulkWrite.

db.MyProject.update(
    {$set : {Editor: " IntelliJ"}},
    {multi : true}
);

// How to Update The Many Records In Mongo Db:-
db.MyProject.updateMany(
    {_id : ObjectId("66d4a21560de01a4b737798f")},
    {$set : {Editor : "New Editor"}}
);


