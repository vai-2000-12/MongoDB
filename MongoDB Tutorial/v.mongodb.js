//Projection using Arrays :-
use('user')
db.users.find().pretty();

//How to project the data of the arrays:-
//db.movies.find({genere : "Drama"}, {"genere.$":1}).pretty();

// db.movird.find({gener : "Drama"}, {genere: {$elemMatch : {$eq : "Horror"}}});  

