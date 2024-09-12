//Joining the relation using $lookup:
// This requires the 4 thing : from 
db.books.aggregate(
    [
        {$lookup: {
          from: "authors",
          localField: "authors",
          foreignField: "_id",
          as: "creators"
        }}
    ]
)