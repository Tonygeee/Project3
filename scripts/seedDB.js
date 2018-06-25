const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"/*,
  {
    useMongoClient: true
  }*/
);

const profileSeed = [
  {
    firstName: "Sara",
    lastName: "Stephens",
    bio: "I like pop and rock bands"
  },
   {
    firstName: "Mike",
    lastName: "Loggins",
    bio: "I like pop and rock bands"
  },
   {
    firstName: "Sam",
    lastName: "Hunt",
    bio: "I am a rock star"
  },

  // db.Profile
  // .remove({})
  // .then(() => db.Book.collection.insertMany(bookSeed))
  // .then(data => {
  //   console.log(data.insertedCount + " records inserted!");
  //   process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });