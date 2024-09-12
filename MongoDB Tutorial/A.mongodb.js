use("vaibhav");

db.prac.insertOne({ name: 'Aniket', age: 4 });
db.prac.insertOne({ name: 'Umesh', age: 4 });

db.prac.find();
db.prac.find().pretty();

db.prac.insertMany([
    { name: 'Kanchan', age: 23, Clg: 'SRIT' }, 
    { name: 'ABCD', age: 21, Clg: 'GGITS' }
]);

db.prac.deleteOne({ name: 'Aryan' })
db.prac.deleteMany({ $or: [{ name: 'Aryan' }, { name: 'ABCD' }] })

db.prac.countDocuments()
db.prac.estimatedDocumentCount();