[
    {
        "_id": {
          "$oid": "6512254b493f3ade6b2a658e"
        },
        "name": "Sazin Khan",
        "age": 32,
        "job": "Teacher"
      },
      {
        "_id": {
          "$oid": "651225e121e89af77b9bbe51"
        },
        "name": "Jesmis",
        "age": 28,
        "job": "student"
      },
      {
        "_id": {
          "$oid": "6519796eb1bee63355089860"
        },
        "name": "hp laptop",
        "price": 50000,
        "showroom": "dhaka"
      }

]


use("Demo_Data");

db.createCollection("NewCollection");

db.brands.drop();

db.NewCollection.insertOne({
  "name":"hp laptop",
  "price":50000,
  "showroom":"dhaka"
});

db.NewCollection.deleteOne({
  "name": "hp laptop"
})