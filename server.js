const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const multer = require('multer');
// const fs = require(‘fs’);
var fs = require('file-system');
const Schema = mongoose.Schema;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(multer({
//     dest: `./uploads/`,
//     rename: function (fieldname, filename) {
//         return filename;
//     }
// }));


// Add routes, both API and view
app.use(routes);



// Connect to the Mongo TODO - DB CHANGE DB NAME
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddyup");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//test//