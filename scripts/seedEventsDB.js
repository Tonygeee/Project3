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
    eventName: "Dark Star Orchestra",
    eventDate: "10/23/18",
    eventLocation: "Crest Theatre",
    eventAddress: "1013 K Street, Sacramento, CA. 95814"
  },
  {
    eventName: "The Milk Carton Kids",
    eventDate: "10/10/18",
    eventLocation: "Crest Theatre",
    eventAddress: "1013 K Street, Sacramento, CA. 95814"
  },
  {
    eventName: "Willow",
    eventDate: "10/08/18",
    eventLocation: "Crest Theatre",
    eventAddress: "1013 K Street, Sacramento, CA. 95814"
  }
]

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