//Adding the GeoJSON Data
use ('awesomePlaces');
//Lets add some awesome Places Location in MongoDB

// Adding the GeoSpatial Data In the MongoDB Server..
// Important Note :To specify GeoJSON data, use an embedded document with:

// a field named type that specifies the GeoJSON object type, and

// a field named coordinates that specifies the object's coordinates.

// <field>: { type: <GeoJSON type> , coordinates: <coordinates> }

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

//We need The GeoSpatial Index to create it and to create the Index we need to  add the String as "2dsphere"..
db.places.createIndex({location : "2dsphere"})

db.places.find({location: {$near :{$geometry :{type :"Point", coordinates : [-122.4947258, 37.7689453]}, $maxDistance : 400, $minDistance : 110}}});

//Adding The Additional Locations: I.E adding the Locations which are inside this Added Area...
//Adding few More Documents
db.places.insertOne({name : "Conservatory Of Flowers", location :{type : "Point", coordinates : [-122.4628307, 37.7726229]}});
db.places.insertOne({name : "Golden Gate Park Tennis Court", location : {type : "Point", coordinates : [-122.4615694, 37.7701884]}});
db.places.insertOne({name : "Nopa", location :{ type : "Point", coordinates : [-122.4387591, 37.774903]}});
db.places.insertOne({name : "California Academy of Sciences", location : {type : "Point", coordinates : [-122.4686696, 37.7698688]}});
db.places.find().pretty();

db.places.find({location :{$near : {$geometry : {type : "Point", coordinates : [-122.4615694, 37.7701884]}}}})

//Coordinates of the Areas With its Longitude and Latitude
// const p1 = [-122.4547, 37.77473];
// const p2 = [-122.45303, 37.76641];
// const p3 = [-122.51026, 37.76411];
// const p4 = [-122.51088, 37.77131];

db.places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [-122.4547, 37.77473],
          [-122.45303, 37.76641],
          [-122.51026, 37.76411],
          [-122.51088, 37.77131],
          [-122.4547, 37.77473]
        ]]
      }
    }
  }
});
//Here in this Query I didnt Get the "Nopa" Location Just Because It was Outside the Polygon Not Inside the That polygon
db.areas.insertOne({
  name: "Golden Gate Park",
  area: {
    type: "Polygon",
    coordinates: [[
      [-122.4547, 37.77473],
      [-122.45303, 37.76641],
      [-122.51026, 37.76411],
      [-122.51088, 37.77131],
      [-122.4547, 37.77473]
    ]]
  }
});

//Lets Create the Index for this area Field :
db.areas.createIndex({areas : "2dsphere"});
db.places.find({
  areas: {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [-122.49089, 37.76992]
      }
    }
  }
});
//Finding the Places with Near By radius:-

db.places.find({location :{$geoWithin :{$centerSphere : [ [-122.46203, 37.77286] , 1/6378.1]}}});