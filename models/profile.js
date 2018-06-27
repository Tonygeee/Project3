const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  // firstNAme: { type: String, required: true },
  // lastName: { type: String, required: true },
  bio: String,
  userName: String,
  password: String,
  email: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
