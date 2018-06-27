const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
<<<<<<< HEAD
  // firstNAme: { type: String, required: true },
  // lastName: { type: String, required: true },
=======
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
>>>>>>> 316ebdd739fe876e75dea10fc0e857d6c1035037
  bio: String,
  userName: String,
  password: String,
  email: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

