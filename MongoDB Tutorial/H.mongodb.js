// Example use case of Relationship How to use Relationship
use ('blog');
db.users.insertMany([ 
    {name  : "Max", age : 29 , email : "max12@gmail.com"}, 
    {name  : "Roy", age : 30 , email : "roy22@gmail.com"}, 
    {name  : "John", age : 32 , email : "john92@gmail.com"} 
]);

db.users.find();

//lets insert The posts Collections:
db.posts.insertOne({title : "RK_Med Col", text : "hello World", tags : ["new", "tech"] ,  creator : ObjectId("66e0353876c2d3848a8e96b2"), comments : [ "I liked it❤️❤️" , "Nice post👌👌" ]});  
db.posts.find().toArray();