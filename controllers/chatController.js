import Chatkit from "@pusher/chatkit-server";
const express = require("express");
const app = express();

const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:9444a659-fe48-4c3c-b739-9445db574fcd",
    key: "473a4088-03fe-4fb9-884e-a556b33da82d:+7cQzfwFkdu1zjW7BdYdbDBe3lkwDX0oeJIVwz2fd78="
});

app.post("/users", (req, res) => {
    const { username } = req.body;
    chatkit
        .createUser({
            id: username,
            name: username
        })
        .then(() => {
            console.log(`User created: ${username}`);
            res.sendStatus(201);
        })
        .catch(err => {
            if (err.error === "services/chatkit/user_already_exists") {
                console.log(`User already exists: ${username}`);
                res.sendStatus(200);
            } else {
                res.status(err.status).json(err);
            }
        });
});

app.post("/authenticate", (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id });
    res.status(authData.status).send(authData.body);
});
