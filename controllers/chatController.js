const express = require("express");
const bodyParser = require("body-parser");
const Chatkit = require("@pusher/chatkit-server");

const app = express();
// module.exports = {
// app.post("/authenticate", (req, res) => {
//     console.log(req.query.userId);
//     const authData = chatkit.authenticate({ userId: req.query.userId });
//     res.status(authData.status).send(authData.body);
// });
// }