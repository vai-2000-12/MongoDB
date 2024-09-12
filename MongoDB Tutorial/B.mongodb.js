  use("vaibhav");
  db.prac.find();

// Creating the Table in a MongoDb:
db.createCollection("My Projects");

db.MyProjects.insertOne({
    Title : "TIC-TAC Project",
    TechStack : "HTML CSS JS"
});

// find is used to show all  the records  in a Database
db.MyProjects.find();

// inserting the More Than One Records In MongoDb them use This Function:
db.MyProjects.insertMany([{
    Title : "TODO-APP",
    TechStack : "HTML CSS JS"
},
  { Title : "TODO-APP2", 
    TechStack : "HTML CSS JS",
    Functionality : "Added The Dark Mode Functionality"
  },
])

// This Method is Basically used to Show the records In the MongoDB Database
db.MyProjects.find();

//Basically Its An improved Versions To Count the No.of Records Im the Particular Document
db.MyProjects.estimatedDocumentCount()
db.MyProjects.countDocuments() // O/p 2

// Now the Function to Delete A Record In the Mongo db:
// The Function i.e is Used is "deleteOne()"
db.MyProjects.deleteOne({Title : "TODO-APP2"});

//The function for Deleting the More than 1 Record from the Collection :
// Ex 1  :
db.MyProjects.deleteMany({
    $or : [
        { Title: "TODO-APP" },
        { Title: "TIC-TAC Project" }
    ]
});

// Ex 2  :-
db.MyProjects.deleteMany({
    $and : [
        { Title: "TODO-APP" },
        { Title: "TIC-TAC Project" }
    ]
});

