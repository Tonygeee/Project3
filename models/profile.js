const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({

  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  facebookURL: String,
  instagramURL: String,
  bio: String,
  image: { data: Buffer, contentType: String }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

