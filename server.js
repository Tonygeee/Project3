const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const multer = require('multer');
// const Chatkit = require("@pusher/chatkit-server");
const cors = require('cors');
// const fs = require(‘fs’);
var fs = require('file-system');
const Schema = mongoose.Schema;
// const chatkit = new Chatkit.default({
//     instanceLocator: "v1:us1:9444a659-fe48-4c3c-b739-9445db574fcd",
//     key: "473a4088-03fe-4fb9-884e-a556b33da82d:+7cQzfwFkdu1zjW7BdYdbDBe3lkwDX0oeJIVwz2fd78="
// });

// Define middleware here
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.post("/users", (req, res) => {
//     const { username } = req.body;
//     chatkit
//         .createUser({
//             id: username,
//             name: username
//         })
//         .then(() => {
//             console.log(`User created: ${username}`);
//             res.sendStatus(201);
//         })
//         .catch(err => {
//             if (err.error === "services/chatkit/user_already_exists") {
//                 console.log(`User already exists: ${username}`);
//                 res.sendStatus(200);
//             } else {
//                 res.status(err.status).json(err);
//             }
//         });
// });
app.use(cors());
// app.use(multer({
//     dest: `./uploads/`,
//     rename: function (fieldname, filename) {
//         return filename;
//     }
// }));


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddyup");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//test//