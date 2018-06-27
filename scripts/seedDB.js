const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/profileInfo"/*,
  {
    useMongoClient: true
  }*/
);

const profileSeed = [
  {
    userName: "Sara",
    email: "Stephens@mail.com",
    password: "1234"
    confirmPassword: "1234"
    bio: "I like pop and rock bands."
  },
   {
    userName: "Sam",
    email: "Sam@mail.com",
    password: "1234"
    confirmPassword: "1234"
    bio: "I like pop, classical and rock bands."
  },
   {
    userName: "Matt",
    email: "Matt@mail.com",
    password: "1234"
    confirmPassword: "1234"
    bio: "I like country."
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
]