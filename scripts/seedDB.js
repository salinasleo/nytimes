const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytimes"
);

const articleSeed = [
    {
  
    title: "The Dead Zone",
    url: "www.ntyimes.com/deadzone",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    url: "www.ntyimes.com/lord",
    date: new Date(Date.now())
  }
];

db.nytreact
  .remove({})
  .then(() => db.nytreact.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
