const mongoose = require("mongoose");

// i am not sure we can name this with a "2"
const Schema2 = mongoose.Schema2;

const eventSchema = new Schema({
  eventName: String,
  eventId: String,
  url: String,
  image: String,
  startDateTime: String,
  venue: String,
  localDate: String,
  dateTime: String,
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;