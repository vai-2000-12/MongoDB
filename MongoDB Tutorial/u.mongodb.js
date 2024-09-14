// TOPIC :- Using projection to shape our results:-
use('user');
db.users.find().pretty();

// If the id is not defined for projection it gets Automatically included in the Query
db.users.find({},{"hobbies.title" :1, age :1}).sort({age :1}).pretty();
