use('OrderDetails');
db.customers.insertMany([
    { "_id": 1, "name": "John Doe", "age": 29, "city": "New York" },
    { "_id": 2, "name": "Jane Smith", "age": 34, "city": "Los Angeles" },
    { "_id": 3, "name": "Mike Johnson", "age": 22, "city": "Chicago" },
    { "_id": 4, "name": "Emily Davis", "age": 27, "city": "Houston" },
    { "_id": 5, "name": "Sarah Wilson", "age": 31, "city": "San Francisco" },
    { "_id": 6, "name": "Daniel Brown", "age": 40, "city": "Dallas" },
    { "_id": 7, "name": "Laura Miller", "age": 38, "city": "Seattle" },
    { "_id": 8, "name": "Matthew Garcia", "age": 45, "city": "Miami" },
    { "_id": 9, "name": "David Martinez", "age": 33, "city": "Boston" },
    { "_id": 10, "name": "Anna White", "age": 29, "city": "Phoenix" }
  ]);
  
  db.customers.insertMany([
  { name: 'Michael Brown', age: 35, city: 'Denver', hobbies: ['Reading', 'Hiking', 'Gaming'], previous_cities: ['Austin', 'Chicago'] },
  { name: 'Olivia Davis', age: 28, city: 'Las Vegas', hobbies: ['Photography', 'Cooking'], previous_cities: ['Phoenix', 'Seattle', 'San Diego'] },
  { name: 'Liam Johnson', age: 41, city: 'Atlanta', hobbies: ['Cycling', 'Painting', 'Swimming'], previous_cities: ['New York', 'Dallas'] },
  { name: 'Sophia Lee', age: 30, city: 'Orlando', hobbies: ['Dancing', 'Running'], previous_cities: ['Miami', 'Los Angeles', 'San Francisco'] },
  { name: 'William Smith', age: 50, city: 'Portland', hobbies: ['Fishing', 'Cooking', 'Traveling'], previous_cities: ['Houston', 'Denver', 'Phoenix'] }
]);

db.customers.insertMany([
    { 
      name: 'Emily Carter', 
      age: 29, 
      city: 'San Diego', 
      hobbies: ['Surfing', 'Painting'], 
      address: { street: '456 Beach Ave', city: 'San Diego', state: 'CA', zip: '92109' },
      previous_cities: ['Los Angeles', 'San Francisco']
    },
    { 
      name: 'James Wilson', 
      age: 37, 
      city: 'Philadelphia', 
      hobbies: ['Reading', 'Golfing'], 
      address: { street: '789 Liberty Bell Rd', city: 'Philadelphia', state: 'PA', zip: '19103' },
      contact: { phone: '215-555-1234', email: 'james.wilson@example.com' },
      previous_cities: ['New York', 'Boston']
    },
    { 
      name: 'Ava Johnson', 
      age: 32, 
      city: 'Seattle', 
      hobbies: ['Cooking', 'Biking'], 
      address: { street: '123 Pike Place', city: 'Seattle', state: 'WA', zip: '98101' },
      contact: { phone: '206-555-5678', email: 'ava.johnson@example.com' },
      previous_cities: ['San Francisco', 'Portland']
    },
    { 
      name: 'Benjamin Taylor', 
      age: 45, 
      city: 'Austin', 
      hobbies: ['Music', 'Hiking'], 
      address: { street: '789 Hill Country Blvd', city: 'Austin', state: 'TX', zip: '73301' },
      contact: { phone: '512-555-9876', email: 'benjamin.taylor@example.com' },
      previous_cities: ['Dallas', 'Houston']
    },
    { 
      name: 'Mia Brown', 
      age: 28, 
      city: 'Nashville', 
      hobbies: ['Singing', 'Photography'], 
      address: { street: '321 Music Row', city: 'Nashville', state: 'TN', zip: '37203' },
      contact: { phone: '615-555-4321', email: 'mia.brown@example.com' },
      previous_cities: ['Atlanta', 'Charlotte']
    }
  ]);
  

db.customers.find().pretty();

//So lets Find the All those age whose Value is greater than equals 20
db.customers.find({"address.zip" :  {$eq : "37203"}}).pretty();
// This explain method works for update delete and find It Doesnt work for insert Query
db.customers.explain().find({"address.zip" :  {$eq : "37203"}}).pretty();

//We can also  pass the Argument called as "executionStats" this is used to get the Detailed Output for that query
db.customers.explain("executionStats").find({"address.zip" :  {$eq : "37203"}}).pretty();

//How to create the Index in the Mongo Db 

db.customers.createIndex( {"address.city" : 1});

// It Did the Index Scan  its look like this "stage": "IXSCAN".. 
db.customers.explain("executionStats").find({"address.city" : 1}).pretty();

/*
What does createIndex() do in detail?

Whilst we can't really see the index, you can think of the index as a simple list of values + pointers to the original document.

Something like this (for the "age" field):

(29, "address in memory/ collection a1")

(30, "address in memory/ collection a2")

(33, "address in memory/ collection a3")

The documents in the collection would be at the "addresses" a1, a2 and a3. 
The order does not have to match the order in the index (and most likely, it indeed won't).

The important thing is that the index items are ordered (ascending or descending - depending on how you created the index). createIndex({age: 1}) 
creates an index with ascending sorting, createIndex({age: -1}) creates one with descending sorting.

MongoDB is now able to quickly find a fitting document when you filter for its age as it has a sorted list. 
Sorted lists are way quicker to search because you can skip entire ranges (and don't have to look at every single document).

Additionally, sorting (via sort(...)) will also be sped up because you already have a sorted list.
 Of course this is only true when sorting for the age.
*/

// Indexes Doesen't comes for free They basically slow down the Writes 