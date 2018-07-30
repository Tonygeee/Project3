var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Profile = require("../../models/profile");
const Chatkit = require("@pusher/chatkit-server");

const app = express();

const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:9444a659-fe48-4c3c-b739-9445db574fcd",
    key: "473a4088-03fe-4fb9-884e-a556b33da82d:+7cQzfwFkdu1zjW7BdYdbDBe3lkwDX0oeJIVwz2fd78="
});

// creating router for signup/ register the new user

router.post('/register', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new Profile({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            app.post("/users", (req, res) => {
                const { username } = req.body;
                chatkit
                    .createUser({
                        id: username,
                        name: username
                    })
                    .then(() => {
                        console.log(`Profile created: ${username}`);
                        res.sendStatus(201);
                    })
                    .catch(err => {
                        if (err.error === "services/chatkit/user_already_exists") {
                            console.log(`Profile already exists: ${username}`);
                            res.sendStatus(200);
                        } else {
                            res.status(err.status).json(err);
                        }
                    });
            });
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
});

// create router for login or sign in

router.post('/login', function (req, res) {
    Profile.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. Profile not found.' });
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), settings.secret);
                    //chatKit login
                    app.post("/authenticate", (req, res) => {
                        const authData = chatkit.authenticate({ userId: req.query.user_id });
                        res.status(authData.status).send(authData.body);
                    });
                    // return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token });

                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});


module.exports = router;
