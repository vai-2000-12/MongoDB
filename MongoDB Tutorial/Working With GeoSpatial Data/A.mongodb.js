//Adding the GeoJSON Data
use ('awesomePlaces');
//Lets add some awesome Places Location in MongoDB

db.places.insertOne({name : "Hellman Hollow Picnic Area", location :{type : "Point", coordinates: [-122.4842247, 37.7683151]}});
db.places.find().pretty();
/*
"location": {
      "type": "Point",
      "coordinates": [
        -122.4842247,
        37.7683151
      ]
    } GeoJSON Object
*/

// How to Run GeoJSON Queries:-
// $near Operator is the Operator Given By the MongoDB database to find the Location NearBy

db.places.find({location: {$near :{$geometry :{type :"Point", coordinates : [-122.4947258, 37.7689453]}}}});
//error processing query: ns=test.placesTree: GEONEAR field=location maxdist=1.79769e+308 isNearSphere=0 Sort: {} Proj: {} planner returned error :: caused by :: unable to find index for $geoNear query

//We need The GeoSpatial Index to create it:
db.places.createIndex({location : "2dsphere"})

db.places.find({location: {$near :{$geometry :{type :"Point", coordinates : [-122.4947258, 37.7689453]}, $maxDistance : 400, $minDistance : 110}}});

