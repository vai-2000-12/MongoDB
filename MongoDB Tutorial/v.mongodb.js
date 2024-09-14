//Projection using Arrays :-
use('user')
db.users.find().pretty();

//How to project the data of the arrays:-
//db.movies.find({genere : "Drama"}, {"genere.$":1}).pretty();

//db.movird.find({gener : "Drama"}, {genere: {$elemMatch : {$eq : "Horror"}}});  

//$slice Method for Projection:
//Lets Create The New Database:
use('website');
db.posts.insertMany([
    {
      _id: 1,
      title: "Bagels are not croissants.",
      comments: [ { comment: "0. true" }, { comment: "1. croissants aren't bagels."} ]
    },
    {
      _id: 2,
      title: "Coffee please.",
      comments: [ { comment: "0. fooey" }, { comment: "1. tea please" }, { comment: "2. iced coffee" }, { comment: "3. cappuccino" }, { comment: "4. whatever" } ]
    }
 ])

 db.posts.insertMany([
  {
      _id: 3,
      title: "The best time for a workout.",
      comments: [
          { comment: "0. Early morning is ideal." },
          { comment: "1. Evening workouts work better for some." },
          { comment: "2. Midday works if you have flexibility." }
      ]
  },
  {
      _id: 4,
      title: "Favorite book genres.",
      comments: [
          { comment: "0. Science Fiction" },
          { comment: "1. Mystery" },
          { comment: "2. Fantasy" },
          { comment: "3. Non-fiction" }
      ]
  },
  {
      _id: 5,
      title: "Best programming languages to learn in 2024.",
      comments: [
          { comment: "0. Python" },
          { comment: "1. JavaScript" },
          { comment: "2. Go" },
          { comment: "3. Rust" }
      ]
  },
  {
      _id: 6,
      title: "Top vacation spots for 2024.",
      comments: [
          { comment: "0. Tokyo, Japan" },
          { comment: "1. Paris, France" },
          { comment: "2. Bali, Indonesia" },
          { comment: "3. New York City, USA" }
      ]
  },
  {
      _id: 7,
      title: "How to stay productive while working from home.",
      comments: [
          { comment: "0. Set a routine" },
          { comment: "1. Create a dedicated workspace" },
          { comment: "2. Take regular breaks" },
          { comment: "3. Use productivity tools" }
      ]
  }
]);

db.posts.find().pretty();
 
 /* The query `db.posts.find({}, {comments : { : 3}});` is projecting the `comments` array field
 from the `posts` collection and returning the first 3 elements of the array. The `$slice` operator
 with a positive value (3 in this case) indicates that the specified number of elements should be
 returned from the beginning of the array. */
 db.posts.find({}, {comments : {$slice : 3}});

 /* The query `db.posts.find({}, {comments :{ : -3}});` is projecting the `comments` array field
 from the `posts` collection and returning the last 3 elements of the array. The `$slice` operator
 with a negative value (-3 in this case) indicates that the specified number of elements should be
 returned from the end of the array. */
 db.posts.find({}, {comments :{$slice : -3}});

 /* The query `db.posts.find({}, { : [1, 3]});` is projecting the `comments` array field from the
 `posts` collection and returning a subset of elements starting from the second element (index 1)
 and including the next 3 elements.*/
 //This will skip the Frst Element
 
db.posts.find({}, {comments :{$slice : [1, 3]}}).pretty();


/* The query `db.posts.find({}, {comments :{ : [-1, 3]}}).pretty();` is projecting the `comments`
array field from the `posts` collection and returning a subset of elements. */

db.posts.find({}, {comments :{$slice : [-1, 3]}}).pretty();
