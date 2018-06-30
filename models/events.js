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
  dateTime: String,
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;