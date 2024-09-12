//Schema Validation:-  Lets Say You are inserting the documents and you want tO Validate the user then we have the Schema Validation if this fails then this data will be rejected
// Validation Level and Validation Action
// Validation Action basically means what happens if the Validation fails..
// We can set the Validation as "strict" in the query Like insert and updates Query.. This VL will throw an error or it will deny the insert or update query 
// We can set the Validation as "Moderate" it will only check for the Updates Query which basically checks if the validated Data is Correct then we can log the warning but we can proceed
//Depends upon the requirement...

use('posts');
db.posts.insertOne({ title: "RK_Med Col", text: "hello World", tags: ["new", "tech"], creator: ObjectId("66e0353876c2d3848a8e96b2"), comments: [{ text: "I liked it❤️❤️" }, { ObjectId: "66e0353876c2d3848a8e96b2" }] });
db.posts.find().pretty();

db.posts.drop();
db.posts.findOne();

db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "text", "creator", "comments"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                text: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                creator: {
                    bsonType: "objectId",
                    description: "must be an ObjectId and is required"
                },
                comments: {
                    bsonType: "array",
                    description: "must be an array",
                    items: {
                        bsonType: "object",
                        required: ["text", "author"],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            author: {
                                bsonType: "objectId",
                                description: "must be an ObjectId and is required"
                            }
                        }
                    }
                }
            }
        }
    }
});


//For Correcting the error  we can  use the ValidationActions and We use db.runCommand() query and passing the Validator inside it.. 
db.posts.insertOne({title : "RK_Med Col", text : "hello World", tags : ["new", "tech"] ,  creator : ObjectId("66e0353876c2d3848a8e96b2"), comments : [ "I liked it❤️❤️" , "Nice post👌👌" ]});


db.runCommand({
      collMod :'posts' , 
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title", "text", "creator", "comments"],
                properties: {
                    title: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                    text: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                    creator: {
                        bsonType: "objectId",
                        description: "must be an ObjectId and is required"
                    },
                    comments: {
                        bsonType: "array",
                        description: "must be an array",
                        items: {
                            bsonType: "object",
                            required: ["text", "author"],
                            properties: {
                                text: {
                                    bsonType: "string",
                                    description: "must be a string and is required"
                                },
                                author: {
                                    bsonType: "objectId",
                                    description: "must be an ObjectId and is required"
                                }
                            }
                        }
                    }
                }
            }
        },
        validationAction : 'warn'
});

db.posts.insertOne({title : "RK_Med Col", text : "hello World", tags : ["new", "tech"] ,  creator : ObjectId("66e0353876c2d3848a8e96b2"), comments : [ "I liked it❤️❤️" , "Nice post👌👌" ]});
db.posts.find().pretty()