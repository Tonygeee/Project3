const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/buddyup"/*,
  {
    useMongoClient: true
  }*/
);

const profilesSeed = [
  {
    userName: "Sara",
    password: "1234",
    email: "Stephens@mail.com",
    facebookURL: "myfacebook.com"
    instagramURL: "myinsta.com"
    bio: "Shank cow tri-tip andouille chuck brisket pancetta. Doner pork loin pork belly shoulder, pastrami turkey meatball frankfurter. Corned beef ball tip cow tri-tip tongue strip steak pastrami drumstick t-bone prosciutto ground round ham turkey salami shank. Ball tip bacon kielbasa, andouille cow landjaeger ground round strip steak biltong turducken jerky. "
    image: ""
  },
  {
    userName: "Jason",
    password: "1234",
    email: "Stephens@mail.com",
    facebookURL: "myfacebook.com"
    instagramURL: "myinsta.com"
    bio: "Shank cow tri-tip andouille chuck brisket pancetta. Doner pork loin pork belly shoulder, pastrami turkey meatball frankfurter. Corned beef ball tip cow tri-tip tongue strip steak pastrami drumstick t-bone prosciutto ground round ham turkey salami shank. Ball tip bacon kielbasa, andouille cow landjaeger ground round strip steak biltong turducken jerky. "
    image: ""
  },
  {
    userName: "Sam",
    password: "1234",
    email: "Stephens@mail.com",
    facebookURL: "myfacebook.com"
    instagramURL: "myinsta.com"
    bio: "Shank cow tri-tip andouille chuck brisket pancetta. Doner pork loin pork belly shoulder, pastrami turkey meatball frankfurter. Corned beef ball tip cow tri-tip tongue strip steak pastrami drumstick t-bone prosciutto ground round ham turkey salami shank. Ball tip bacon kielbasa, andouille cow landjaeger ground round strip steak biltong turducken jerky. "
    image: ""
  }
]

db.Profile
  .remove({})
  .then(() => db.Profile.collection.insertMany(profilesSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });