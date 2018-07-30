const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const profileSchema = new Schema({

  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  facebookURL: String,
  instagramURL: String,
  bio: String,
  image: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Events"
    }
  ]
});

profileSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

