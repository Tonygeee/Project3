const mongoose = require("mongoose");

// i am not sure we can name this with a "2"
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: String,
  eventId: String,
  url: String,
  image: String,
  startDateTime: String,
  venue: String,
  localDate: String,
  localTime: String,
  profiles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    }
  ]
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;