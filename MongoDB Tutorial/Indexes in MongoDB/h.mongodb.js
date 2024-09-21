//Setting up the Default Language & using Weights
//Lets Drop the Index:-
db.products.getIndexes();
// Removing the Text Indexing 
db.products.dropIndexes("title_text_description_text");

//Lets Create the New Index with some New Aarguments:
db.products.createIndex({title :"text",  description :"text"}, {default_language : "english", weights :{title : 1, description :10}})
db.products.getIndexes();
db.products.find().pretty();

//I can add the language and caseSensitive in MongoDB
db.products.find({$text : {$search : "Machine", $language : "german", $caseSensitive : true}})
db.products.find({$text : {$search : "Machine"}}, {score : {$meta : "textScore"}}).pretty();

db.products.getIndexes();

